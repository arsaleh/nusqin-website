#!/bin/bash

# Add fields to EspoCRM custom entities
ESPOCRM_URL="http://localhost:8080"
AUTH_HEADER="Espo-Authorization: $(echo -n 'admin:nusqin2025' | base64)"

echo "🔧 Adding fields to custom entities..."

# Patient Fields
echo -e "\n📋 Adding Patient fields..."

# Date of Birth
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CPatient","name":"dateOfBirth","type":"date","required":false}' > /dev/null
echo "  ✅ dateOfBirth"

# Gender
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CPatient","name":"gender","type":"enum","required":false,"options":["Male","Female","Other","Prefer not to say"]}' > /dev/null
echo "  ✅ gender"

# Medical History
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CPatient","name":"medicalHistory","type":"text","required":false}' > /dev/null
echo "  ✅ medicalHistory"

# Allergies
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CPatient","name":"allergies","type":"text","required":false}' > /dev/null
echo "  ✅ allergies"

# Patient Status
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CPatient","name":"patientStatus","type":"enum","required":true,"default":"Active","options":["Active","Inactive","Archived"]}' > /dev/null
echo "  ✅ patientStatus"

# Appointment Fields
echo -e "\n📅 Adding Appointment fields..."

# Patient Link
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createLink \
  -d '{"entity":"CAppointment","link":"patient","foreignEntity":"CPatient","linkType":"belongsTo"}' > /dev/null
echo "  ✅ patient (link to Patient)"

# Treatment Type
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CAppointment","name":"treatmentType","type":"enum","required":true,"options":["Botox","Dermal Fillers","Microneedling","PRP (Platelet-Rich Plasma)","Laser Treatment","Minor Surgery","TempSure","Chemical Peels","Consultation"]}' > /dev/null
echo "  ✅ treatmentType"

# Status
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CAppointment","name":"status","type":"enum","required":true,"default":"Scheduled","options":["Scheduled","Confirmed","In Progress","Completed","Cancelled","No-Show"]}' > /dev/null
echo "  ✅ status"

# Duration
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CAppointment","name":"duration","type":"int","required":false,"default":60}' > /dev/null
echo "  ✅ duration"

# Treatment Session Fields
echo -e "\n💉 Adding Treatment Session fields..."

# Patient Link
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createLink \
  -d '{"entity":"CTreatmentSession","link":"patient","foreignEntity":"CPatient","linkType":"belongsTo"}' > /dev/null
echo "  ✅ patient (link to Patient)"

# Appointment Link
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createLink \
  -d '{"entity":"CTreatmentSession","link":"appointment","foreignEntity":"CAppointment","linkType":"belongsTo"}' > /dev/null
echo "  ✅ appointment (link to Appointment)"

# Session Date
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CTreatmentSession","name":"sessionDate","type":"datetime","required":true}' > /dev/null
echo "  ✅ sessionDate"

# Treatment Type
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CTreatmentSession","name":"treatmentType","type":"enum","required":true,"options":["Botox","Dermal Fillers","Microneedling","PRP (Platelet-Rich Plasma)","Laser Treatment","Minor Surgery","TempSure","Chemical Peels"]}' > /dev/null
echo "  ✅ treatmentType"

# Session Notes
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CTreatmentSession","name":"sessionNotes","type":"text","required":false}' > /dev/null
echo "  ✅ sessionNotes"

# Revenue
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CTreatmentSession","name":"revenue","type":"currency","required":false}' > /dev/null
echo "  ✅ revenue"

# Consent Signed
curl -s -X POST -H "Content-Type: application/json" -H "$AUTH_HEADER" \
  $ESPOCRM_URL/api/v1/EntityManager/action/createField \
  -d '{"entity":"CTreatmentSession","name":"consentSigned","type":"bool","required":true,"default":false}' > /dev/null
echo "  ✅ consentSigned"

echo -e "\n✅ All fields added successfully!"
echo -e "\n🔄 Now rebuilding EspoCRM..."

# Rebuild
curl -s -X POST -H "$AUTH_HEADER" $ESPOCRM_URL/api/v1/Admin/rebuild > /dev/null
echo "✅ Rebuild complete!"

echo -e "\n✨ Entity setup complete! You can now:"
echo "  1. Refresh http://localhost:8080 to see the new entities"
echo "  2. Test the API at http://localhost:3000/api/espocrm/test"
