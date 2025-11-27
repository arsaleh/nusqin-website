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

    // Try to get custom entities (will return empty if not created yet)
    let patientsData = { total: 0, list: [] };
    let appointmentsData: any[] = [];
    let customEntitiesCreated = false;

    try {
      patientsData = await client.getPatients({ maxSize: 1 });
      appointmentsData = await client.getUpcomingAppointments(5);
      customEntitiesCreated = true;
    } catch (entityError: any) {
      // Custom entities don't exist yet - that's okay
      console.log('Custom entities not yet created:', entityError.message);
    }

    return NextResponse.json({
      success: true,
      connection: 'OK',
      apiKeyValid: true,
      user: {
        id: user.id,
        name: user.name,
        userName: user.userName,
        type: user.type,
      },
      customEntities: {
        created: customEntitiesCreated,
        message: customEntitiesCreated
          ? 'Patient and Appointment entities are configured'
          : 'Custom entities not yet created - follow ESPOCRM_SETUP.md to create them',
      },
      stats: customEntitiesCreated ? {
        totalPatients: patientsData.total,
        upcomingAppointments: appointmentsData.length,
      } : null,
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
