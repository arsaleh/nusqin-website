/**
 * EspoCRM TypeScript Type Definitions
 * For NuSQIN Medical Aesthetics CRM Integration
 */

// Base Entity Interface
export interface BaseEntity {
  id?: string;
  name?: string;
  deleted?: boolean;
  createdAt?: string;
  modifiedAt?: string;
  createdById?: string;
  modifiedById?: string;
}

// Patient Entity
export interface Patient extends BaseEntity {
  firstName: string;
  lastName: string;
  salutationName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  gender?: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
  addressStreet?: string;
  addressCity?: string;
  addressState?: string;
  addressPostalCode?: string;
  addressCountry?: string;
  insuranceProvider?: string;
  insuranceNumber?: string;
  allergies?: string;
  medicalHistory?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  preferredDoctorId?: string;
  preferredDoctorName?: string;
  patientStatus?: 'Active' | 'Inactive' | 'Archived';
  consentFormsIds?: string[];
}

// Appointment Entity
export interface Appointment extends BaseEntity {
  patientId: string;
  patientName?: string;
  treatmentType: TreatmentType;
  dateStart: string; // ISO datetime
  dateEnd?: string; // ISO datetime
  duration?: number; // minutes
  assignedUserId?: string;
  assignedUserName?: string;
  status: AppointmentStatus;
  appointmentNotes?: string;
  reminderSent?: boolean;
  confirmationSent?: boolean;
  location?: string;
}

// Treatment Session Entity
export interface TreatmentSession extends BaseEntity {
  patientId: string;
  patientName?: string;
  appointmentId?: string;
  treatmentType: string;
  performedById: string;
  performedByName?: string;
  sessionDate: string; // ISO datetime
  productsUsed?: string;
  dosageAmount?: string;
  injectionSites?: string;
  beforePhotosIds?: string[];
  afterPhotosIds?: string[];
  sessionNotes?: string;
  followUpDate?: string; // ISO date
  revenue?: number;
  revenueCurrency?: string;
  consentSigned?: boolean;
}

// Treatment Types (matching constants.ts)
export type TreatmentType =
  | 'Botox'
  | 'Dermal Fillers'
  | 'Microneedling'
  | 'PRP (Platelet-Rich Plasma)'
  | 'Laser Treatment'
  | 'Minor Surgery'
  | 'TempSure'
  | 'Chemical Peels'
  | 'Consultation';

// Appointment Status
export type AppointmentStatus =
  | 'Scheduled'
  | 'Confirmed'
  | 'In Progress'
  | 'Completed'
  | 'Cancelled'
  | 'No-Show';

// API Response Types
export interface EspoCRMListResponse<T> {
  total: number;
  list: T[];
}

export interface EspoCRMError {
  statusCode: number;
  message: string;
}

// API Request Types
export interface CreatePatientRequest {
  firstName: string;
  lastName: string;
  emailAddress?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  gender?: Patient['gender'];
  allergies?: string;
  medicalHistory?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
}

export interface CreateAppointmentRequest {
  patientId: string;
  treatmentType: TreatmentType;
  dateStart: string;
  duration?: number;
  appointmentNotes?: string;
  status?: AppointmentStatus;
}

export interface CreateTreatmentSessionRequest {
  patientId: string;
  appointmentId?: string;
  treatmentType: string;
  performedById: string;
  sessionDate: string;
  productsUsed?: string;
  dosageAmount?: string;
  sessionNotes?: string;
  revenue?: number;
  consentSigned?: boolean;
}

// Query Parameters
export interface EspoCRMQueryParams {
  select?: string; // Comma-separated field list
  where?: Array<{
    type: 'equals' | 'notEquals' | 'greaterThan' | 'lessThan' | 'contains' | 'in';
    attribute: string;
    value: any;
  }>;
  offset?: number;
  maxSize?: number;
  orderBy?: string;
  order?: 'asc' | 'desc';
}
