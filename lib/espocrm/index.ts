/**
 * EspoCRM Integration Library
 * Export all types and client
 */

export { EspoCRMClient, getEspoCRMClient } from './client';
export type {
  Patient,
  Appointment,
  TreatmentSession,
  TreatmentType,
  AppointmentStatus,
  CreatePatientRequest,
  CreateAppointmentRequest,
  CreateTreatmentSessionRequest,
  EspoCRMListResponse,
  EspoCRMQueryParams,
} from './types';
