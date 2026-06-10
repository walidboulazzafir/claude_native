# Measure Service

Stores environmental readings and detects anomalies.

## Port
3003

## Database
MongoDB — `climdash_measures`

## Endpoints
- POST /measures — Add new measure (requires JWT)
- GET /measures — List all measures (requires JWT)

## Anomaly Detection
If value is outside minThreshold/maxThreshold, publishes
a `measure.anomaly` event to RabbitMQ.

## Environment Variables
- PORT=3003
- MONGO_URI=mongodb://mongo-measures:27017/climdash_measures
- JWT_SECRET=supersecretkey123
- RABBITMQ_URL=amqp://rabbitmq