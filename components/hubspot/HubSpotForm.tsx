'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
}

export default function HubSpotForm({
  portalId,
  formId,
  region = 'na3'
}: HubSpotFormProps) {
  return (
    <>
      <Script
        src={`https://js-${region}.hsforms.net/forms/embed/${portalId}.js`}
        strategy="lazyOnload"
      />
      <div
        className="hs-form-frame hubspot-form-wrapper"
        data-region={region}
        data-form-id={formId}
        data-portal-id={portalId}
      />
    </>
  );
}
