# ClimDash — Environmental Supervision System

## Services
- **auth-service** (port 3001) — Register/Login, JWT
- **sensor-service** (port 3002) — Sensor CRUD
- **measure-service** (port 3003) — Measures + anomaly detection
- **notification-service** — RabbitMQ consumer
- **frontend** (port 3000) — React dashboard
- **nginx** (port 80) — Reverse proxy

## Run
```cmd
docker-compose up --build
```

## API Endpoints
- POST /api/auth/register
- POST /api/auth/login
- GET  /api/sensors/
- POST /api/sensors/
- GET  /api/measures/
- POST /api/measures/