import { FastifyInstance } from "fastify";
import { renderToString } from "react-dom/server";
import * as authSchema from "../schemas/json/auth.json";
import * as registerSchema from "../schemas/json/register.json";
import * as messageSchema from "../schemas/json/message.json";
import { Auth } from "../schemas/types/auth";
import { Message } from "../schemas/types/message";
import { Register } from "../schemas/types/Register";
import showAuthHTML from "../templates/authHTML";

enum MIME_TYPES {
  HTML = "text/html",
  JSON = "application/json",
  PDF = "application/pdf",
}

export async function authRoutes(fastify: FastifyInstance) {
  fastify.route<{ Body: Auth }>({
    method: "POST",
    url: "/login",
    schema: {
      body: authSchema,
      response: { 200: messageSchema },
    },
    handler: async function AuthRender(request, reply): Promise<Message> {
      return { message: "Connection successful" };
    },
  });

  fastify.route<{ Body: Register }>({
    method: "GET",
    url: "/register",
    schema: {
      body: registerSchema,
      response: { 200: authSchema },
    },
    handler: async function registerRender(request, reply): Promise<Message> {
      return { message: "Account creation successful" };
    },
  });
}
