import ContactForm from '@/components/ContactForm';

export default function TestCRMPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1
              className="text-4xl font-light mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-charcoal)'
              }}
            >
              EspoCRM Integration Test
            </h1>
            <p className="text-lg" style={{ color: 'var(--color-charcoal)' }}>
              Fill out this form to test the EspoCRM integration. <br />
              The data will be saved in your local EspoCRM instance.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-3">Testing Instructions:</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Fill out the form below and submit</li>
              <li>Go to EspoCRM: <a href="http://localhost:8080" target="_blank" rel="noopener" className="text-blue-600 underline">http://localhost:8080</a></li>
              <li>Click on <strong>Patients</strong> in the navigation (if visible)</li>
              <li>If not visible: Administration → User Interface → Enable "CPatient" tab</li>
              <li>You should see the patient you just created!</li>
            </ol>
          </div>

          <div className="mt-4 p-6 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold mb-2">Note:</h3>
            <p className="text-sm">
              This is a test page for EspoCRM integration. Your main contact form at <code>/contact</code> still uses HubSpot.
              Once you're satisfied with the EspoCRM integration, you can switch the main contact form to use EspoCRM instead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
