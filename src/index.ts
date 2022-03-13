
import "reflect-metadata";
import { createConnection } from "typeorm";
import { fastify } from "./lib/fastify";

createConnection()
  .then(async (connection) => {})
  .catch((error) => {
    console.log(error);
  });

fastify.listen(process.env.PORT ?? 3000).catch(console.error);

