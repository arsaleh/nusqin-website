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

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

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
      throw new Error(responseData.message || `Form submission failed (${response.status})`);
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
