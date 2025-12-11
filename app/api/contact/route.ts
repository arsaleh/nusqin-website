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

      // Add email if provided
      if (email) {
        patientData.emailAddress = email;
      }
    }

    // Add phone if provided (format to international E.164)
    if (phone && phone.trim().length > 0) {
      let formattedPhone = phone.trim().replace(/\D/g, ''); // Remove non-digits
      // Add country code if not present (assume +1 for North America)
      if (!formattedPhone.startsWith('1') && formattedPhone.length === 10) {
        formattedPhone = '1' + formattedPhone;
      }
      if (!formattedPhone.startsWith('+')) {
        formattedPhone = '+' + formattedPhone;
      }
      patientData.phoneNumber = formattedPhone;
    }

    // Store message and treatment interest in description field
    if (message || treatmentInterest) {
      const newEntry = `[${new Date().toISOString().split('T')[0]}] Treatment Interest: ${treatmentInterest || 'Not specified'}\nMessage: ${message || 'No message provided'}`;

      if (existingPatient && existingPatient.description) {
        patientData.description = `${existingPatient.description}\n\n${newEntry}`;
      } else {
        patientData.description = newEntry;
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
