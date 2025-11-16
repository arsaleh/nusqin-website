# EspoCRM Local Testing Setup

## Quick Start (5 minutes)

### 1. Start EspoCRM with Docker

```bash
# From project root
cd /Users/arsl/code/beauty-clinic/nusqin-website

# Start EspoCRM containers
docker-compose -f docker-compose.espocrm.yml up -d

# Check logs (wait ~2 minutes for initialization)
docker-compose -f docker-compose.espocrm.yml logs -f espocrm

# When you see "Apache/2.4.x configured", it's ready!
```

### 2. Access EspoCRM

**URL**: http://localhost:8080
**Username**: `admin`
**Password**: `nusqin2025`

### 3. Generate API Key

1. Login to EspoCRM
2. Click **Administration** (top right)
3. Go to **Users** → **API Users**
4. Click **Create API User**
5. Fill in:
   - **User Name**: `nusqin-website-api`
   - **API Key**: Click **Generate** button
   - **Is Active**: ✅ Check
6. **Save** and copy the API key
7. Paste API key in `.env.local`:
   ```
   ESPOCRM_API_KEY=your-generated-key-here
   ```

---

## Phase 0 Testing Checklist

### A. Initial Setup (30 minutes)

- [ ] Start Docker containers
- [ ] Access EspoCRM at localhost:8080
- [ ] Login with admin credentials
- [ ] Generate API key
- [ ] Add API key to `.env.local`

### B. Custom Entity Configuration (1 hour)

#### Create Patient Entity

1. **Administration** → **Entity Manager** → **Create Entity**
2. Configure:
   ```
   Name: Patient
   Type: Person
   Label (Singular): Patient
   Label (Plural): Patients
   Stream: ✅ Enabled
   ```

3. Add Custom Fields:
   - **Date of Birth**: Type: Date
   - **Gender**: Type: Enum (Male, Female, Other, Prefer not to say)
   - **Insurance Provider**: Type: Varchar
   - **Insurance Number**: Type: Varchar
   - **Allergies**: Type: Text
   - **Medical History**: Type: Text
   - **Emergency Contact Name**: Type: Varchar
   - **Emergency Contact Phone**: Type: Phone
   - **Preferred Doctor**: Type: Link → User
   - **Patient Status**: Type: Enum (Active, Inactive, Archived)
   - **Consent Forms**: Type: Attachment Multiple

#### Create Appointment Entity

1. **Administration** → **Entity Manager** → **Create Entity**
2. Configure:
   ```
   Name: Appointment
   Type: Event
   Label (Singular): Appointment
   Label (Plural): Appointments
   Stream: ✅ Enabled
   Calendar: ✅ Enabled
   ```

3. Add Custom Fields:
   - **Patient**: Type: Link → Patient (required)
   - **Treatment Type**: Type: Enum
     - Botox
     - Dermal Fillers
     - Microneedling
     - PRP (Platelet-Rich Plasma)
     - Laser Treatment
     - Minor Surgery
     - Consultation
   - **Scheduled Date**: Type: DateTime (required)
   - **Duration (minutes)**: Type: Integer (default: 60)
   - **Assigned To**: Type: Link → User
   - **Status**: Type: Enum
     - Scheduled
     - Confirmed
     - In Progress
     - Completed
     - Cancelled
     - No-Show
   - **Appointment Notes**: Type: Text
   - **Reminder Sent**: Type: Boolean
   - **Confirmation Sent**: Type: Boolean

#### Create Treatment Session Entity

1. **Administration** → **Entity Manager** → **Create Entity**
2. Configure:
   ```
   Name: TreatmentSession
   Type: Base
   Label (Singular): Treatment Session
   Label (Plural): Treatment Sessions
   Stream: ✅ Enabled
   ```

3. Add Custom Fields:
   - **Patient**: Type: Link → Patient (required)
   - **Appointment**: Type: Link → Appointment
   - **Treatment Type**: Type: Varchar (required)
   - **Performed By**: Type: Link → User (required)
   - **Session Date**: Type: DateTime (required)
   - **Products Used**: Type: Text
   - **Dosage/Amount**: Type: Varchar
   - **Injection Sites**: Type: Text
   - **Before Photos**: Type: Attachment Multiple
   - **After Photos**: Type: Attachment Multiple
   - **Session Notes**: Type: Text
   - **Follow-up Date**: Type: Date
   - **Revenue**: Type: Currency
   - **Consent Signed**: Type: Boolean

### C. Email Template Setup (30 minutes)

#### Appointment Confirmation Template

1. **Administration** → **Email Templates** → **Create**
2. Configure:
   ```
   Name: Appointment Confirmation
   Subject: Your Appointment at NuSQIN Medical Aesthetics - {Appointment.scheduledDate}
   ```
3. Body:
   ```html
   <p>Dear {Patient.name},</p>

   <p>Thank you for booking your appointment at <strong>NuSQIN Medical Aesthetics</strong>.</p>

   <h3>Appointment Details:</h3>
   <ul>
     <li><strong>Treatment:</strong> {Appointment.treatmentType}</li>
     <li><strong>Date:</strong> {Appointment.scheduledDate}</li>
     <li><strong>Duration:</strong> {Appointment.duration} minutes</li>
     <li><strong>Practitioner:</strong> {Appointment.assignedTo.name}</li>
   </ul>

   <p><strong>Location:</strong><br>
   Unit 105, 1465 Salisbury Ave<br>
   Port Coquitlam, BC V3B-6J3<br>
   Phone: (604) 349-9229</p>

   <p>If you need to reschedule or have any questions, please contact us.</p>

   <p>Best regards,<br>
   <strong>NuSQIN Medical Aesthetics Team</strong></p>
   ```

#### Appointment Reminder Template (24 hours before)

1. **Administration** → **Email Templates** → **Create**
2. Configure:
   ```
   Name: Appointment Reminder - 24 Hours
   Subject: Reminder: Your Appointment Tomorrow at NuSQIN
   ```
3. Body:
   ```html
   <p>Dear {Patient.name},</p>

   <p>This is a friendly reminder about your upcoming appointment:</p>

   <h3>Tomorrow's Appointment:</h3>
   <ul>
     <li><strong>Treatment:</strong> {Appointment.treatmentType}</li>
     <li><strong>Date:</strong> {Appointment.scheduledDate}</li>
     <li><strong>Duration:</strong> {Appointment.duration} minutes</li>
   </ul>

   <p><strong>Please arrive 10 minutes early</strong> to complete any necessary paperwork.</p>

   <p>Looking forward to seeing you!<br>
   <strong>NuSQIN Medical Aesthetics</strong></p>
   ```

### D. Workflow Automation (30 minutes)

#### Auto-send Confirmation Email

1. **Administration** → **Workflows** → **Create Workflow**
2. Configure:
   ```
   Entity Type: Appointment
   Name: Send Confirmation Email
   Target Type: After record created
   ```
3. **Conditions**: Status equals "Scheduled"
4. **Actions**:
   - **Send Email**
   - Template: Appointment Confirmation
   - To: {Patient.emailAddress}
   - From: info@nusqin.ca

#### Auto-send Reminder 24 Hours Before

1. **Administration** → **Workflows** → **Create Workflow**
2. Configure:
   ```
   Entity Type: Appointment
   Name: Send 24hr Reminder
   Target Type: Scheduled
   Scheduling: Formula → scheduledDate - 1 day
   ```
3. **Conditions**:
   - Status equals "Scheduled" OR "Confirmed"
   - Reminder Sent equals false
4. **Actions**:
   - **Send Email** (Template: Appointment Reminder)
   - **Update Record** → Set Reminder Sent = true

### E. Test Data Creation (30 minutes)

#### Create Test Patients

1. Go to **Patients** → **Create Patient**
2. Add 3-5 test patients:
   ```
   Patient 1:
   - Name: Sarah Johnson
   - Email: sarah.test@example.com
   - Phone: (604) 555-0101
   - Date of Birth: 1985-06-15
   - Gender: Female
   - Allergies: None known

   Patient 2:
   - Name: Michael Chen
   - Email: michael.test@example.com
   - Phone: (604) 555-0102
   - Date of Birth: 1978-03-22
   - Gender: Male
   - Allergies: Latex
   ```

#### Create Test Appointments

1. Go to **Appointments** → **Create Appointment**
2. Add 2-3 appointments for different dates and treatments
3. Verify emails are sent (check Docker logs)

### F. API Testing (1 hour)

#### Test API with curl

```bash
# Set your API key
export API_KEY="your-api-key-here"

# Test 1: Get all patients
curl -X GET "http://localhost:8080/api/v1/Patient" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: $API_KEY"

# Test 2: Create a patient
curl -X POST "http://localhost:8080/api/v1/Patient" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: $API_KEY" \
  -d '{
    "firstName": "Jane",
    "lastName": "Doe",
    "emailAddress": "jane.doe@example.com",
    "phoneNumber": "(604) 555-0103"
  }'

# Test 3: Get appointments
curl -X GET "http://localhost:8080/api/v1/Appointment" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: $API_KEY"

# Test 4: Create appointment
curl -X POST "http://localhost:8080/api/v1/Appointment" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: $API_KEY" \
  -d '{
    "name": "Botox Consultation",
    "patientId": "PATIENT_ID_HERE",
    "treatmentType": "Botox",
    "dateStart": "2025-11-20 14:00:00",
    "duration": 60,
    "status": "Scheduled"
  }'
```

---

## Next Steps

After completing testing:

1. [ ] Document any issues or limitations found
2. [ ] Test Next.js API integration (see below)
3. [ ] Decide: Continue with production deployment?

---

## Stopping/Restarting

```bash
# Stop containers (data persists)
docker-compose -f docker-compose.espocrm.yml stop

# Start again
docker-compose -f docker-compose.espocrm.yml start

# Stop and remove containers (data persists in volumes)
docker-compose -f docker-compose.espocrm.yml down

# Remove everything including data
docker-compose -f docker-compose.espocrm.yml down -v
```

---

## Troubleshooting

### Container won't start
```bash
# Check logs
docker-compose -f docker-compose.espocrm.yml logs

# Restart
docker-compose -f docker-compose.espocrm.yml restart
```

### Can't access localhost:8080
```bash
# Check if port is already in use
lsof -i :8080

# Kill process using port 8080
kill -9 $(lsof -t -i:8080)
```

### Database connection issues
```bash
# Wait for MySQL to be fully ready (can take 2-3 minutes)
docker-compose -f docker-compose.espocrm.yml logs mysql

# Should see: "ready for connections"
```

### Reset everything
```bash
docker-compose -f docker-compose.espocrm.yml down -v
docker-compose -f docker-compose.espocrm.yml up -d
```

---

## Resources

- **EspoCRM Docs**: https://docs.espocrm.com/
- **API Documentation**: https://docs.espocrm.com/development/api/
- **Entity Manager Guide**: https://docs.espocrm.com/administration/entity-manager/
- **Workflow Guide**: https://docs.espocrm.com/administration/workflows/

---

**Estimated Total Time**: 4-6 hours for complete testing
**Cost**: $0
