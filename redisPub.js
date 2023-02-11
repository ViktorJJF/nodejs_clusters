const { createClient } = require("redis");

(async () => {
  const client = createClient({
    host: "localhost",
    port: 6379,
  });
  const client2 = createClient({
    host: "localhost",
    port: 6379,
  });
  await client.connect();
  await client2.connect();
  client.on("error", (err) =>
    console.error(`Error connecting to the Redis server: ${err}`)
  );
  client.on("connect", () =>
    console.log("Successfully connected to the Redis server")
  );

  try {
    // Subscribe to the "chat" channel
    await client.subscribe("chat");

    // // Listen for messages on the "chat" channel
    client.on("message", (channel, message) => {
      console.log(`Received message on channel "${channel}": ${message}`);
    });

    // Publish a message to the "chat" channel
    // client2.publish("chat", "Hello, world!");
  } catch (error) {
    console.log(error);
  }
})();
