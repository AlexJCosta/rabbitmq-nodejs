var amqp= require('amqplib');

// Connecting in RabbitMQ
amqp.connect('amqp://localhost')
.then((conn) => {
    console.log('Connected!');

    // Creating channel
    return conn.createChannel();
}).then((ch) => {
    console.log('Channel created!');

    const queueName = 'messages';
    // Consuming messages to queue during interval determinated
    return ch.consume(queueName, (msg) => {
        if (msg !== null) {
          console.log('Message received!', msg.content.toString());
          ch.ack(msg);
        }
    });  
});