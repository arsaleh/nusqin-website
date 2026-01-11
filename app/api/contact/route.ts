/**
 * Contact Form API Endpoint
 * NOTE: This route is deprecated. Form submissions now go directly to HubSpot.
 * Keeping this route for backwards compatibility.
 */

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Form submissions now go directly to HubSpot from the client
  // This route is kept for backwards compatibility
  return NextResponse.json({
    success: false,
    message: 'This endpoint is deprecated. Please use the HubSpot form submission.',
  }, { status: 410 }); // 410 Gone
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact form submissions are now handled by HubSpot.',
  });
}
