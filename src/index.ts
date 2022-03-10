import { application } from "express";
import { fastify } from "./lib/fastify";

const PORT = process.env.PORT || 5000;

// Routes

// Listen
/* fastify.listen(process.env.PORT ?? 3000).catch(console.error) */
application.listen(PORT, () => {
  console.log(
    `Serrrver running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
/* const start = async () => {
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
start(); */
