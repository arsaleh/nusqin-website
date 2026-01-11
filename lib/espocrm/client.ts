/**
 * EspoCRM API Client
 * Provides type-safe integration with EspoCRM REST API
 */

import type {
  Patient,
  Contact,
  Case,
  Appointment,
  TreatmentSession,
  CreatePatientRequest,
  CreateAppointmentRequest,
  CreateTreatmentSessionRequest,
  EspoCRMListResponse,
  EspoCRMQueryParams,
} from './types';

export class EspoCRMClient {
  private baseUrl: string;
  private apiKey: string;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl.replace(/\/$/, ''); // Remove trailing slash
    this.apiKey = apiKey;
  }

  /**
   * Generic request method
   */
  private async request<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    body?: any,
    params?: EspoCRMQueryParams
  ): Promise<T> {
    const url = new URL(`${this.baseUrl}/api/v1/${endpoint}`);

    // Add query parameters
    if (params) {
      if (params.select) url.searchParams.set('select', params.select);
      if (params.offset !== undefined) url.searchParams.set('offset', params.offset.toString());
      if (params.maxSize) url.searchParams.set('maxSize', params.maxSize.toString());
      if (params.orderBy) url.searchParams.set('orderBy', params.orderBy);
      if (params.order) url.searchParams.set('order', params.order);
      // EspoCRM expects where as array-style params: where[0][type]=equals&where[0][attribute]=email
      if (params.where) {
        params.where.forEach((condition, index) => {
          Object.entries(condition).forEach(([key, value]) => {
            url.searchParams.set(`where[${index}][${key}]`, String(value));
          });
        });
      }
    }

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'X-Api-Key': this.apiKey,
    };

    const options: RequestInit = {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    };

    try {
      const response = await fetch(url.toString(), options);

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: response.statusText }));

        // Log detailed error for debugging
        if (process.env.NODE_ENV === 'development') {
          console.error('EspoCRM API Error:', {
            endpoint,
            status: response.status,
            error
          });
        }

        throw new Error(`EspoCRM API Error (${response.status}): ${error.message || response.statusText}`);
      }

      // DELETE requests may not return JSON
      if (method === 'DELETE') {
        return { success: true } as T;
      }

      return response.json();
    } catch (error) {
      console.error('EspoCRM API request failed:', error);
      throw error;
    }
  }

  // ==================== Contact Operations (Built-in Entity) ====================

  /**
   * Create a new contact
   */
  async createContact(data: Partial<Contact>): Promise<Contact> {
    return this.request<Contact>('Contact', 'POST', data);
  }

  /**
   * Get contact by ID
   */
  async getContact(id: string): Promise<Contact> {
    return this.request<Contact>(`Contact/${id}`);
  }

  /**
   * Get all contacts (with optional filtering)
   */
  async getContacts(params?: EspoCRMQueryParams): Promise<EspoCRMListResponse<Contact>> {
    return this.request<EspoCRMListResponse<Contact>>('Contact', 'GET', undefined, params);
  }

  /**
   * Update contact
   */
  async updateContact(id: string, data: Partial<Contact>): Promise<Contact> {
    return this.request<Contact>(`Contact/${id}`, 'PUT', data);
  }

  /**
   * Find contact by email
   */
  async findContactByEmail(email: string): Promise<Contact | null> {
    const response = await this.getContacts({
      where: [{ type: 'equals', attribute: 'emailAddress', value: email }],
      maxSize: 1,
    });
    return response.list[0] || null;
  }

  // ==================== Case Operations (Built-in Entity) ====================

  /**
   * Create a new case (inquiry/ticket)
   */
  async createCase(data: Partial<Case>): Promise<Case> {
    return this.request<Case>('Case', 'POST', data);
  }

  /**
   * Get case by ID
   */
  async getCase(id: string): Promise<Case> {
    return this.request<Case>(`Case/${id}`);
  }

  /**
   * Get all cases for a contact
   */
  async getContactCases(contactId: string): Promise<Case[]> {
    const response = await this.request<EspoCRMListResponse<Case>>(
      'Case',
      'GET',
      undefined,
      {
        where: [{ type: 'equals', attribute: 'contactId', value: contactId }],
        orderBy: 'createdAt',
        order: 'desc',
      }
    );
    return response.list;
  }

  /**
   * Update case
   */
  async updateCase(id: string, data: Partial<Case>): Promise<Case> {
    return this.request<Case>(`Case/${id}`, 'PUT', data);
  }

  // ==================== Patient Operations (Custom Entity) ====================

  /**
   * Create a new patient
   */
  async createPatient(data: CreatePatientRequest): Promise<Patient> {
    return this.request<Patient>('CPatient', 'POST', data);
  }

  /**
   * Get patient by ID
   */
  async getPatient(id: string): Promise<Patient> {
    return this.request<Patient>(`CPatient/${id}`);
  }

  /**
   * Get all patients (with optional filtering)
   */
  async getPatients(params?: EspoCRMQueryParams): Promise<EspoCRMListResponse<Patient>> {
    return this.request<EspoCRMListResponse<Patient>>('CPatient', 'GET', undefined, params);
  }

  /**
   * Update patient
   */
  async updatePatient(id: string, data: Partial<Patient>): Promise<Patient> {
    return this.request<Patient>(`CPatient/${id}`, 'PUT', data);
  }

  /**
   * Delete patient (soft delete)
   */
  async deletePatient(id: string): Promise<{ success: boolean }> {
    return this.request(`CPatient/${id}`, 'DELETE');
  }

  /**
   * Search patients by email
   */
  async findPatientByEmail(email: string): Promise<Patient | null> {
    const response = await this.getPatients({
      where: [{ type: 'equals', attribute: 'emailAddress', value: email }],
      maxSize: 1,
    });
    return response.list[0] || null;
  }

  // ==================== Appointment Operations ====================

  /**
   * Create a new appointment
   */
  async createAppointment(data: CreateAppointmentRequest): Promise<Appointment> {
    // Calculate dateEnd if not provided
    const appointmentData = {
      ...data,
      dateEnd: data.duration
        ? new Date(new Date(data.dateStart).getTime() + data.duration * 60000).toISOString()
        : undefined,
    };

    return this.request<Appointment>('CAppointment', 'POST', appointmentData);
  }

  /**
   * Get appointment by ID
   */
  async getAppointment(id: string): Promise<Appointment> {
    return this.request<Appointment>(`CAppointment/${id}`);
  }

  /**
   * Get all appointments (with optional filtering)
   */
  async getAppointments(params?: EspoCRMQueryParams): Promise<EspoCRMListResponse<Appointment>> {
    return this.request<EspoCRMListResponse<Appointment>>('CAppointment', 'GET', undefined, params);
  }

  /**
   * Get appointments for specific patient
   */
  async getPatientAppointments(patientId: string): Promise<Appointment[]> {
    const response = await this.getAppointments({
      where: [{ type: 'equals', attribute: 'patientId', value: patientId }],
      orderBy: 'dateStart',
      order: 'desc',
    });
    return response.list;
  }

  /**
   * Get upcoming appointments
   */
  async getUpcomingAppointments(limit: number = 10): Promise<Appointment[]> {
    const now = new Date().toISOString();
    const response = await this.getAppointments({
      where: [
        { type: 'greaterThan', attribute: 'dateStart', value: now },
        { type: 'in', attribute: 'status', value: ['Scheduled', 'Confirmed'] },
      ],
      orderBy: 'dateStart',
      order: 'asc',
      maxSize: limit,
    });
    return response.list;
  }

  /**
   * Update appointment
   */
  async updateAppointment(id: string, data: Partial<Appointment>): Promise<Appointment> {
    return this.request<Appointment>(`CAppointment/${id}`, 'PUT', data);
  }

  /**
   * Update appointment status
   */
  async updateAppointmentStatus(id: string, status: Appointment['status']): Promise<Appointment> {
    return this.updateAppointment(id, { status });
  }

  /**
   * Cancel appointment
   */
  async cancelAppointment(id: string): Promise<Appointment> {
    return this.updateAppointmentStatus(id, 'Cancelled');
  }

  // ==================== Treatment Session Operations ====================

  /**
   * Create a new treatment session
   */
  async createTreatmentSession(data: CreateTreatmentSessionRequest): Promise<TreatmentSession> {
    return this.request<TreatmentSession>('CTreatmentSession', 'POST', data);
  }

  /**
   * Get treatment session by ID
   */
  async getTreatmentSession(id: string): Promise<TreatmentSession> {
    return this.request<TreatmentSession>(`CTreatmentSession/${id}`);
  }

  /**
   * Get all treatment sessions for a patient
   */
  async getPatientTreatmentSessions(patientId: string): Promise<TreatmentSession[]> {
    const response = await this.request<EspoCRMListResponse<TreatmentSession>>(
      'CTreatmentSession',
      'GET',
      undefined,
      {
        where: [{ type: 'equals', attribute: 'patientId', value: patientId }],
        orderBy: 'sessionDate',
        order: 'desc',
      }
    );
    return response.list;
  }

  /**
   * Update treatment session
   */
  async updateTreatmentSession(id: string, data: Partial<TreatmentSession>): Promise<TreatmentSession> {
    return this.request<TreatmentSession>(`CTreatmentSession/${id}`, 'PUT', data);
  }

  // ==================== Utility Methods ====================

  /**
   * Test API connection
   */
  async testConnection(): Promise<boolean> {
    try {
      await this.request('App/user');
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get current API user info
   */
  async getCurrentUser(): Promise<any> {
    return this.request('App/user');
  }
}

// Export singleton instance (will be configured via env vars)
let espoCRMInstance: EspoCRMClient | null = null;

export function getEspoCRMClient(): EspoCRMClient {
  if (!espoCRMInstance) {
    const url = process.env.ESPOCRM_URL;
    const apiKey = process.env.ESPOCRM_API_KEY;

    if (!url || !apiKey) {
      throw new Error('EspoCRM configuration missing. Set ESPOCRM_URL and ESPOCRM_API_KEY in .env.local');
    }

    espoCRMInstance = new EspoCRMClient(url, apiKey);
  }

  return espoCRMInstance;
}

export default EspoCRMClient;
