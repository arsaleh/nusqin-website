/**
 * EspoCRM Entity Setup Script
 * Creates custom entities for NuSQIN patient management
 */

const ESPOCRM_URL = 'http://localhost:8080';
const ESPOCRM_API_KEY = '15706b18565d99e3e4086a680c336c89';

interface EntityField {
  name: string;
  type: string;
  required?: boolean;
  maxLength?: number;
  options?: string[];
  default?: any;
  [key: string]: any;
}

interface EntityDefinition {
  name: string;
  type: 'Base' | 'BasePlus' | 'Event' | 'Person';
  labelSingular: string;
  labelPlural: string;
  stream: boolean;
  disabled: boolean;
  fields: EntityField[];
}

async function apiRequest(endpoint: string, method: string = 'GET', body?: any) {
  const url = `${ESPOCRM_URL}/api/v1/${endpoint}`;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': ESPOCRM_API_KEY,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API Error (${response.status}): ${error}`);
  }

  return response.json();
}

async function createEntity(entityDef: EntityDefinition) {
  console.log(`\n📦 Creating entity: ${entityDef.labelSingular}...`);

  try {
    // Create the entity using EntityManager API
    const result = await apiRequest('EntityManager/action/createEntity', 'POST', {
      name: entityDef.name,
      type: entityDef.type,
      labelSingular: entityDef.labelSingular,
      labelPlural: entityDef.labelPlural,
      stream: entityDef.stream,
      disabled: entityDef.disabled,
    });

    console.log(`✅ Entity ${entityDef.name} created successfully`);

    // Add custom fields
    for (const field of entityDef.fields) {
      await createField(entityDef.name, field);
    }

    return result;
  } catch (error: any) {
    console.error(`❌ Error creating ${entityDef.name}:`, error.message);
    throw error;
  }
}

async function createField(entityName: string, field: EntityField) {
  console.log(`  Adding field: ${field.name} (${field.type})`);

  try {
    await apiRequest('EntityManager/action/createField', 'POST', {
      entity: entityName,
      ...field,
    });

    console.log(`  ✅ Field ${field.name} added`);
  } catch (error: any) {
    console.error(`  ❌ Error adding field ${field.name}:`, error.message);
  }
}

// Define Patient Entity
const patientEntity: EntityDefinition = {
  name: 'Patient',
  type: 'Person',
  labelSingular: 'Patient',
  labelPlural: 'Patients',
  stream: true,
  disabled: false,
  fields: [
    {
      name: 'dateOfBirth',
      type: 'date',
      required: false,
    },
    {
      name: 'gender',
      type: 'enum',
      required: false,
      options: ['Male', 'Female', 'Other', 'Prefer not to say'],
    },
    {
      name: 'allergies',
      type: 'text',
      required: false,
    },
    {
      name: 'medicalHistory',
      type: 'text',
      required: false,
    },
    {
      name: 'emergencyContactName',
      type: 'varchar',
      required: false,
      maxLength: 150,
    },
    {
      name: 'emergencyContactPhone',
      type: 'phone',
      required: false,
    },
    {
      name: 'insuranceProvider',
      type: 'varchar',
      required: false,
      maxLength: 150,
    },
    {
      name: 'insurancePolicyNumber',
      type: 'varchar',
      required: false,
      maxLength: 100,
    },
    {
      name: 'patientStatus',
      type: 'enum',
      required: true,
      default: 'Active',
      options: ['Active', 'Inactive', 'Archived'],
    },
  ],
};

// Define Appointment Entity
const appointmentEntity: EntityDefinition = {
  name: 'Appointment',
  type: 'Event',
  labelSingular: 'Appointment',
  labelPlural: 'Appointments',
  stream: true,
  disabled: false,
  fields: [
    {
      name: 'patient',
      type: 'link',
      required: true,
      entity: 'Patient',
    },
    {
      name: 'treatmentType',
      type: 'enum',
      required: true,
      options: [
        'Botox',
        'Dermal Fillers',
        'Microneedling',
        'PRP (Platelet-Rich Plasma)',
        'Laser Treatment',
        'Minor Surgery',
        'TempSure',
        'Chemical Peels',
        'Consultation',
      ],
    },
    {
      name: 'status',
      type: 'enum',
      required: true,
      default: 'Scheduled',
      options: ['Scheduled', 'Confirmed', 'In Progress', 'Completed', 'Cancelled', 'No-Show'],
    },
    {
      name: 'duration',
      type: 'int',
      required: false,
      default: 60,
    },
    {
      name: 'notes',
      type: 'text',
      required: false,
    },
    {
      name: 'reminderSent',
      type: 'bool',
      required: false,
      default: false,
    },
    {
      name: 'confirmationSent',
      type: 'bool',
      required: false,
      default: false,
    },
  ],
};

// Define Treatment Session Entity
const treatmentSessionEntity: EntityDefinition = {
  name: 'TreatmentSession',
  type: 'Base',
  labelSingular: 'Treatment Session',
  labelPlural: 'Treatment Sessions',
  stream: true,
  disabled: false,
  fields: [
    {
      name: 'patient',
      type: 'link',
      required: true,
      entity: 'Patient',
    },
    {
      name: 'appointment',
      type: 'link',
      required: false,
      entity: 'Appointment',
    },
    {
      name: 'sessionDate',
      type: 'datetime',
      required: true,
    },
    {
      name: 'treatmentType',
      type: 'enum',
      required: true,
      options: [
        'Botox',
        'Dermal Fillers',
        'Microneedling',
        'PRP (Platelet-Rich Plasma)',
        'Laser Treatment',
        'Minor Surgery',
        'TempSure',
        'Chemical Peels',
      ],
    },
    {
      name: 'productsUsed',
      type: 'array',
      required: false,
    },
    {
      name: 'dosage',
      type: 'varchar',
      required: false,
      maxLength: 100,
    },
    {
      name: 'treatmentArea',
      type: 'varchar',
      required: false,
      maxLength: 200,
    },
    {
      name: 'beforePhotos',
      type: 'attachmentMultiple',
      required: false,
    },
    {
      name: 'afterPhotos',
      type: 'attachmentMultiple',
      required: false,
    },
    {
      name: 'sessionNotes',
      type: 'text',
      required: false,
    },
    {
      name: 'followUpDate',
      type: 'date',
      required: false,
    },
    {
      name: 'revenue',
      type: 'currency',
      required: false,
    },
    {
      name: 'consentSigned',
      type: 'bool',
      required: true,
      default: false,
    },
  ],
};

async function setupEntities() {
  console.log('🚀 Starting EspoCRM Entity Setup for NuSQIN Medical Aesthetics\n');
  console.log(`📍 EspoCRM URL: ${ESPOCRM_URL}`);
  console.log(`🔑 API Key: ${ESPOCRM_API_KEY.substring(0, 10)}...`);

  try {
    // Test connection first
    console.log('\n🔍 Testing API connection...');
    await apiRequest('App/user');
    console.log('✅ API connection successful\n');

    // Create entities
    await createEntity(patientEntity);
    await createEntity(appointmentEntity);
    await createEntity(treatmentSessionEntity);

    // Rebuild EspoCRM
    console.log('\n🔄 Rebuilding EspoCRM...');
    await apiRequest('Admin/rebuild', 'POST');
    console.log('✅ Rebuild complete');

    console.log('\n✅ All entities created successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Refresh EspoCRM UI: http://localhost:8080');
    console.log('2. Check Entity Manager to see new entities');
    console.log('3. Test the API: http://localhost:3000/api/espocrm/test');
    console.log('\n✨ Setup complete!\n');

  } catch (error: any) {
    console.error('\n❌ Setup failed:', error.message);
    process.exit(1);
  }
}

// Run setup
setupEntities();
