# EspoCRM Quick Start Guide
## Start Testing in 5 Minutes!

### Step 1: Start Docker Desktop

Open Docker Desktop application on your Mac. Wait for it to fully start (you'll see the whale icon in the menu bar).

### Step 2: Start EspoCRM

```bash
cd /Users/arsl/code/beauty-clinic/nusqin-website

# Start containers
docker-compose -f docker-compose.espocrm.yml up -d

# Check if containers are running
docker ps
```

You should see 2 containers: `nusqin-espocrm` and `nusqin-espocrm-db`

### Step 3: Wait for Initialization (2 minutes)

```bash
# Watch the logs
docker-compose -f docker-compose.espocrm.yml logs -f espocrm

# When you see "Apache/2.4.x configured" - it's ready!
# Press Ctrl+C to stop watching logs
```

### Step 4: Access EspoCRM

Open browser: **http://localhost:8080**

- Username: `admin`
- Password: `nusqin2025`

### Step 5: Generate API Key (2 minutes)

1. Click **Administration** (top right gear icon)
2. Click **API Users** (under Users section)
3. Click **Create API User** button
4. Fill in:
   - User Name: `nusqin-website-api`
   - Click **Generate** next to API Key field
   - Check **Is Active** ✅
5. Click **Save**
6. **Copy the API Key** (you won't see it again!)

### Step 6: Configure Environment

```bash
# Create .env.local file
cat > .env.local << 'EOF'
# EspoCRM Configuration
ESPOCRM_URL=http://localhost:8080
ESPOCRM_API_KEY=paste-your-api-key-here

# Keep existing vars
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=342690538
NEXT_PUBLIC_HUBSPOT_FORM_ID=c82125ae-3b06-457e-a9c2-e87e26c2cd4a
EOF

# Edit and paste your API key
nano .env.local
```

### Step 7: Test API Integration

```bash
# Restart Next.js dev server to load new env vars
# Kill existing server first (if running)
lsof -ti:3000 | xargs kill -9

# Start dev server
npm run dev
```

Open: **http://localhost:3000/api/espocrm/test**

You should see JSON response like:
```json
{
  "success": true,
  "connection": "OK",
  "user": {
    "id": "...",
    "name": "Admin",
    "userName": "admin"
  },
  "stats": {
    "totalPatients": 0,
    "upcomingAppointments": 0
  }
}
```

✅ **Success!** EspoCRM is now connected to your Next.js app!

---

## Next: Configure Custom Entities

Follow **ESPOCRM_SETUP.md** sections B, C, D for:
- Creating Patient, Appointment, TreatmentSession entities
- Email templates for confirmations/reminders
- Workflow automation
- Test data

**Estimated time:** 3-4 hours for full setup

---

## Troubleshooting

### Docker not starting
```bash
# Check Docker is running
docker info

# If not, open Docker Desktop app
```

### Can't access localhost:8080
```bash
# Check if containers are running
docker ps

# Check logs for errors
docker-compose -f docker-compose.espocrm.yml logs espocrm

# Restart containers
docker-compose -f docker-compose.espocrm.yml restart
```

### API test endpoint returns error
```bash
# Make sure API key is correct in .env.local
cat .env.local | grep ESPOCRM_API_KEY

# Restart Next.js server
lsof -ti:3000 | xargs kill -9 && npm run dev
```

---

## Stop/Clean Up

```bash
# Stop containers (keeps data)
docker-compose -f docker-compose.espocrm.yml stop

# Start again later
docker-compose -f docker-compose.espocrm.yml start

# Remove containers (keeps data in volumes)
docker-compose -f docker-compose.espocrm.yml down

# Remove everything including data
docker-compose -f docker-compose.espocrm.yml down -v
```

---

**Branch:** `feature/espocrm-integration`
**Cost:** $0
**Time:** 5 minutes quick start, 4-6 hours full testing
