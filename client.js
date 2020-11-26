var amqp= require('amqplib');

// Connecting in RabbitMQ
amqp.connect('amqp://localhost')
.then((conn) => {
    console.log('Connected!');

    // Creating channel
    return conn.createChannel();
}).then((ch) => {
    console.log('Channel created!');

    // Sending messages to queue during interval determinated
    setInterval(() => {
        const queueName = 'messages';
        // Sending message to queue
        ch.sendToQueue(queueName, Buffer.from(new Date() + 'Hello World!'));
        console.log(new Date() + 'Sending message...');
    }, 1000);
});
