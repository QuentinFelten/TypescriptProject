import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Allergy } from "./entity/Allergy";
import { Product } from "./entity/Product";

import { validate, validateOrReject } from "class-validator";

import { fastify } from "./lib/fastify";
fastify.listen(process.env.PORT ?? 3000).catch(console.error);
