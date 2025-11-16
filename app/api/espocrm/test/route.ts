/**
 * EspoCRM API Test Endpoint
 * Test connection and basic operations
 */

import { NextRequest, NextResponse } from 'next/server';
import { getEspoCRMClient } from '@/lib/espocrm';

export async function GET(req: NextRequest) {
  try {
    const client = getEspoCRMClient();

    // Test connection
    const isConnected = await client.testConnection();

    if (!isConnected) {
      return NextResponse.json(
        { error: 'Failed to connect to EspoCRM' },
        { status: 500 }
      );
    }

    // Get current user info
    const user = await client.getCurrentUser();

    // Get patient count
    const patients = await client.getPatients({ maxSize: 1 });

    // Get upcoming appointments
    const appointments = await client.getUpcomingAppointments(5);

    return NextResponse.json({
      success: true,
      connection: 'OK',
      user: {
        id: user.id,
        name: user.name,
        userName: user.userName,
      },
      stats: {
        totalPatients: patients.total,
        upcomingAppointments: appointments.length,
      },
      upcomingAppointments: appointments.map((apt) => ({
        id: apt.id,
        patient: apt.patientName,
        treatment: apt.treatmentType,
        date: apt.dateStart,
        status: apt.status,
      })),
    });
  } catch (error: any) {
    console.error('EspoCRM test endpoint error:', error);

    return NextResponse.json(
      {
        error: error.message || 'Internal server error',
        hint: 'Make sure ESPOCRM_URL and ESPOCRM_API_KEY are set in .env.local',
      },
      { status: 500 }
    );
  }
}
