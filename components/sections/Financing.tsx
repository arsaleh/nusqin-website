import Image from 'next/image';

export default function Financing() {
  return (
    <section id="financing" className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-100 to-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-teal-50 text-teal-700 font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Flexible Payment Options
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Finance Your Treatment
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Don't let cost stand in the way of looking and feeling your best.
                With Beautifi financing, you can get the treatments you want with
                affordable monthly payments.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Loans from $1,000 to $50,000',
                  'Flexible terms from 6 months to 6 years',
                  'No impact on credit score to apply',
                  'Quick 2-minute application',
                  'Rates starting as low as 7.5%',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://www.beautifi.com/doctors/nusqin-medical/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
              >
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Visual Side */}
            <div className="flex flex-col items-center justify-center text-center">
              {/* Beautifi Logo */}
              <a
                href="https://www.beautifi.com/doctors/nusqin-medical/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-8 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/partners/beautifi-horizontal.png"
                  alt="Beautifi - Cosmetic Financing"
                  width={200}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>

              {/* QR Code */}
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                <Image
                  src="/partners/beautifi-qr.png"
                  alt="Scan to apply for Beautifi financing"
                  width={160}
                  height={160}
                  className="rounded-lg"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Scan to apply on your phone
              </p>

              {/* Trust badge */}
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Secure & confidential application
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
