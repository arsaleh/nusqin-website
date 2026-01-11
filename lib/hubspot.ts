import { HUBSPOT_CONFIG } from './constants';

export interface HubSpotFormField {
  name: string;
  value: string;
}

export interface HubSpotSubmissionData {
  fields: HubSpotFormField[];
  context?: {
    pageUri?: string;
    pageName?: string;
    hutk?: string; // HubSpot user token from cookie
  };
}

export interface HubSpotSubmissionResponse {
  inlineMessage?: string;
  redirectUri?: string;
  errors?: Array<{
    message: string;
    errorType: string;
  }>;
}

// HubSpot error response structure
export interface HubSpotErrorResponse {
  status: 'error';
  message: string;
  correlationId?: string;
  category?: string;
  errors?: Array<{
    message: string;
    code?: string;
    errorType?: string;
    context?: {
      propertyName?: string[];
    };
  }>;
}

// Parsed field error for UI display
export interface FieldError {
  field: string;
  message: string;
}

// Custom error class with field-level details
export class HubSpotValidationError extends Error {
  fieldErrors: FieldError[];

  constructor(message: string, fieldErrors: FieldError[] = []) {
    super(message);
    this.name = 'HubSpotValidationError';
    this.fieldErrors = fieldErrors;
  }
}

// Parse HubSpot error response into field errors
function parseHubSpotErrors(errorResponse: HubSpotErrorResponse): FieldError[] {
  const fieldErrors: FieldError[] = [];

  // Handle errors array
  if (errorResponse.errors && Array.isArray(errorResponse.errors)) {
    for (const error of errorResponse.errors) {
      const field = error.context?.propertyName?.[0] || '';

      // Extract field name from message if not in context
      let fieldName = field;
      if (!fieldName && error.message) {
        const match = error.message.match(/fields\.(\w+)/);
        if (match) fieldName = match[1];
      }

      fieldErrors.push({
        field: fieldName,
        message: error.message,
      });
    }
  }

  // Handle embedded validation errors in message
  if (errorResponse.message?.includes('Property values were not valid')) {
    try {
      const match = errorResponse.message.match(/\[(.+)\]/);
      if (match) {
        const validationErrors = JSON.parse(`[${match[1]}]`);
        for (const err of validationErrors) {
          fieldErrors.push({
            field: err.name || '',
            message: err.message || 'Invalid value',
          });
        }
      }
    } catch {
      // Failed to parse, use generic message
    }
  }

  return fieldErrors;
}

/**
 * Submit form data to HubSpot
 * @param formId - HubSpot form ID
 * @param data - Form submission data
 * @returns Promise with submission response
 */
export async function submitToHubSpot(
  formId: string,
  data: HubSpotSubmissionData
): Promise<HubSpotSubmissionResponse> {
  const { portalId } = HUBSPOT_CONFIG;

  if (!portalId) {
    throw new Error('HubSpot Portal ID not configured');
  }

  if (!formId) {
    throw new Error('HubSpot Form ID is required');
  }

  // Use region-specific endpoint (na3 for North America)
  const url = `https://api-na3.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

  try {
    const payload = {
      fields: data.fields,
      context: {
        pageUri: data.context?.pageUri || (typeof window !== 'undefined' ? window.location.href : ''),
        pageName: data.context?.pageName || (typeof document !== 'undefined' ? document.title : ''),
        hutk: data.context?.hutk || getHubSpotCookie(),
      },
    };

    console.log('Submitting to HubSpot:', { url, payload });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();
    console.log('HubSpot response:', { status: response.status, data: responseData });

    if (!response.ok) {
      const errorResponse = responseData as HubSpotErrorResponse;
      const fieldErrors = parseHubSpotErrors(errorResponse);

      if (fieldErrors.length > 0) {
        throw new HubSpotValidationError(
          errorResponse.message || 'Validation failed',
          fieldErrors
        );
      }

      throw new Error(errorResponse.message || `Form submission failed (${response.status})`);
    }

    return responseData;
  } catch (error) {
    console.error('HubSpot submission error:', error);
    throw error;
  }
}

/**
 * Get HubSpot tracking cookie (hutk) if it exists
 */
function getHubSpotCookie(): string | undefined {
  if (typeof document === 'undefined') return undefined;

  const name = 'hubspotutk=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return undefined;
}

/**
 * Convert form data object to HubSpot fields array
 */
export function convertToHubSpotFields(formData: Record<string, string>): HubSpotFormField[] {
  return Object.entries(formData).map(([name, value]) => ({
    name,
    value,
  }));
}
