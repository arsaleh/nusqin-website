/**
 * EspoCRM Test Endpoint
 * NOTE: This route is deprecated. CRM is now handled by HubSpot.
 */

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'EspoCRM integration is deprecated. Now using HubSpot.',
  });
}
