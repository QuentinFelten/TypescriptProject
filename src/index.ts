import { fastify } from "./lib/fastify";

const dotenv = require("dotenv")

const PORT = process.env.PORT || 5000 || 8080;

// Definition env
dotenv.config({
  path: "./config/config.env",
});

// Routes
fastify.get("/", (req, reply) => {
  reply.send({ test: "Hello World!" });
});

// Passport
// TODO: Implement Passport

// Listen
const start = async () => {
  try {
    await fastify.listen(PORT);
    fastify.log.info(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
start();
