# Sensor Service

Handles CRUD operations for sensors and threshold configuration.

## Port
3002

## Database
MongoDB — `climdash_sensors`

## Endpoints
- GET /sensors — List all sensors (requires JWT)
- POST /sensors — Create sensor (technician only)
- PUT /sensors/:id — Update sensor (requires JWT)
- DELETE /sensors/:id — Delete sensor (requires JWT)

## Environment Variables
- PORT=3002
- MONGO_URI=mongodb://mongo-sensors:27017/climdash_sensors
- JWT_SECRET=supersecretkey123