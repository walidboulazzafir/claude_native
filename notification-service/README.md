# Notification Service

Consumes anomaly events from RabbitMQ and alerts technicians.

## Queue
Listens on `measure.anomaly`

## Behavior
Logs an alert to the console when an anomaly is detected.

## Environment Variables
- RABBITMQ_URL=amqp://rabbitmq