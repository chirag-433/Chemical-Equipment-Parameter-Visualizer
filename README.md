# Chemical Equipment Visualizer

Interactive tool to upload chemical equipment CSV data, compute basic statistics, and visualize equipment type distributions in a web UI.

## Project Structure

- **backend/** — Django REST API (`/api/upload/`, `/api/history/`)
- **web-frontend/** — React app (file upload, tables, charts)
- **desktop-app/** — (reserved for future desktop client)
- **sample_data/** — Example CSVs (e.g. `sample_equipment_data.csv`)

## Requirements

- **Python** 3.10+
- **Node.js** 18+ and **npm**
- **Git** (optional, for cloning from GitHub)

---

## 1. Backend (Django API)

### 1.1. Install dependencies

```bash
cd backend
python -m venv venv
venv\Scripts\activate          # Windows PowerShell / CMD
pip install -r requirements.txt  # if present

# Or, if requirements.txt is missing, at minimum:
pip install django djangorestframework django-cors-headers pandas
```

### 1.2. Apply migrations

```bash
cd backend
python manage.py migrate
```

### 1.3. Run the development server

```bash
cd backend
python manage.py runserver
```

The API will be available at `http://127.0.0.1:8000/`.

Key endpoints:

- `POST /api/upload/` — upload a CSV file
- `GET  /api/history/` — list previously uploaded datasets + summaries

### 1.4. CSV format (critical)

CSV **must** contain these column headers (case‑sensitive):

- `Equipment Name`
- `Type`
- `Flowrate`
- `Pressure`
- `Temperature`

Example: see files in `sample_data/`.

---

## 2. Frontend (React app)

### 2.1. Install dependencies

```bash
cd web-frontend
npm install
```

This installs React, axios, chart.js, react-chartjs-2, etc.

### 2.2. Start the dev server

```bash
cd web-frontend
npm start
```

The app runs at `http://localhost:3000` and expects the Django API at `http://127.0.0.1:8000/api/` (configured in `src/api.js`).

### 2.3. Using the app

1. Make sure the **backend** is running on port **8000**.
2. Open `http://localhost:3000` in your browser.
3. In the **Upload CSV** card:
   - Click **Choose File**, select a CSV matching the format above.
   - Click **Upload**.
4. The **Upload History** card shows, for each dataset:
   - A metrics table (total records, average flowrate, pressure, temperature).
   - A bar chart of equipment `Type` distribution.

---

## 3. Desktop App

The `desktop-app/` folder is currently a placeholder for a future desktop client (e.g. Electron). No setup is required yet.

---

## 4. Troubleshooting

- **Upload failed: Missing columns in CSV**  
  Check that the header row exactly matches:  
  `Equipment Name, Type, Flowrate, Pressure, Temperature`

- **React build errors about axios / chart.js source maps**  
  The project is configured with `.env` in `web-frontend` (`GENERATE_SOURCEMAP=false`) to avoid source‑map loader issues. If you change this, ensure Node modules are installed at the root and in `web-frontend/`.

- **Cannot connect to API from React**  
  Ensure Django is running on `http://127.0.0.1:8000` and that CORS is enabled via `django-cors-headers` (`CORS_ALLOW_ALL_ORIGINS = True` in `backend/config/settings.py`).

