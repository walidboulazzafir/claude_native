require('dotenv').config();
const amqp = require('amqplib');

async function startConsumer() {
    try {
        const conn = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await conn.createChannel();
        await channel.assertQueue('measure.anomaly');

        console.log('Notification service waiting for anomalies...');

        channel.consume('measure.anomaly', (msg) => {
            if (msg) {
                const data = JSON.parse(msg.content.toString());
                console.log(`ALERT: Anomaly detected!`);
                console.log(`  Sensor : ${data.sensorRef}`);
                console.log(`  Type   : ${data.type}`);
                console.log(`  Value  : ${data.value}`);
                channel.ack(msg);
            }
        });
    } catch (err) {
        console.error('Consumer error:', err.message);
        setTimeout(startConsumer, 5000); // retry after 5s
    }
}

startConsumer();