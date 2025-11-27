/**
 * Contact Form API Endpoint
 * Creates a patient lead in EspoCRM when form is submitted
 */

import { NextRequest, NextResponse } from 'next/server';
import { getEspoCRMClient } from '@/lib/espocrm';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, treatmentInterest, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, lastName, email' },
        { status: 400 }
      );
    }

    // Get EspoCRM client
    const client = getEspoCRMClient();

    // Check if patient already exists by email
    const existingPatient = await client.findPatientByEmail(email);

    // Person entities need email/phone in special format
    const patientData: any = {};

    // Only set core fields if creating a new patient
    if (!existingPatient) {
      patientData.firstName = firstName;
      patientData.lastName = lastName;
      patientData.patientStatus = 'Active';

      // Add email if provided
      if (email) {
        patientData.emailAddress = email;
        patientData.emailAddressData = [
          {
            emailAddress: email,
            primary: true,
            optOut: false,
            invalid: false
          }
        ];
      }
    }

    // Add phone if provided (only if it's a non-empty string)
    // EspoCRM has strict phone validation, so we skip it if empty or invalid
    if (phone && phone.trim().length > 0) {
      patientData.phoneNumber = phone.trim();
      patientData.phoneNumberData = [
        {
          phoneNumber: phone.trim(),
          primary: true,
          type: 'Mobile',
          optOut: false,
          invalid: false
        }
      ];
    }

    // Store message and treatment interest in medical history
    // For existing patients, append to existing history instead of overwriting
    if (message || treatmentInterest) {
      const newEntry = `
[${new Date().toISOString().split('T')[0]}] Treatment Interest: ${treatmentInterest || 'Not specified'}
Message: ${message || 'No message provided'}
      `.trim();

      if (existingPatient && existingPatient.medicalHistory) {
        patientData.medicalHistory = `${existingPatient.medicalHistory}\n\n${newEntry}`;
      } else {
        patientData.medicalHistory = newEntry;
      }
    }

    let patient;
    let action: 'created' | 'updated';

    if (existingPatient && existingPatient.id) {
      // Update existing patient
      patient = await client.updatePatient(existingPatient.id, patientData);
      action = 'updated';
      console.log('Patient updated in EspoCRM:', patient.id);
    } else {
      // Create new patient
      patient = await client.createPatient(patientData);
      action = 'created';
      console.log('Patient created in EspoCRM:', patient.id);
    }

    // Return success
    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you soon.',
      patientId: patient.id,
      action, // 'created' or 'updated'
    });

  } catch (error: any) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        error: 'Failed to submit form. Please try again.',
        details: error.message,
      },
      { status: 500 }
    );
  }
}
