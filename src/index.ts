import { fastify } from "./lib/fastify";

const PORT = process.env.PORT || 5000;

// Routes
fastify.get("/", (req, reply) => {
  reply.send({ test: "Hello World" });
});

// Start the server
const start = async () => {
  try {
    await fastify.listen(PORT);
    fastify.log.info(
      `Server running in ${process.env.NODE_ENV} mode on port port ${PORT}`
    );
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
start();
// fastify.listen(process.env.PORT ?? 3000).catch(console.error)
