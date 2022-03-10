import { FastifyInstance } from "fastify";
import { renderToString } from "react-dom/server";
import * as authSchema from "../schemas/json/auth.json";
import * as loginSchema from "../schemas/json/login.json";
import * as registerSchema from "../schemas/json/register.json";
import { Auth } from "../schemas/types/auth";
import { Login } from "../schemas/types/login";
import { Register } from "../schemas/types/Register";
import showAuthHTML from "../templates/authHTML";

enum MIME_TYPES {
  HTML = "text/html",
  JSON = "application/json",
  PDF = "application/pdf",
}

export async function authRoutes(fastify: FastifyInstance) {
  fastify.route<{ Body: Auth }>({
    method: "GET",
    url: "/auth",
    schema: {
      body: authSchema,
      response: { 200: authSchema },
    },
    handler: async function AuthRender(request, reply): Promise<Auth> {
      const jsxElement = showAuthHTML(request.body);
      return reply.type(MIME_TYPES.HTML).send(renderToString(jsxElement));
    },
  });

  fastify.route<{ Body: Login }>({
    method: "GET",
    url: "/auth/login",
    schema: {
      body: loginSchema,
      response: { 200: loginSchema },
    },
    handler: async function loginRender(request, reply): Promise<Login> {
      const jsxElement = showAuthHTML(request.body);
      return reply.type(MIME_TYPES.HTML).send(renderToString(jsxElement));
    },
  });

  fastify.route<{ Body: Register }>({
    method: "GET",
    url: "/auth/register",
    schema: {
      body: registerSchema,
      response: { 200: registerSchema },
    },
    handler: async function registerRender(request, reply): Promise<Register> {
      const jsxElement = showAuthHTML(request.body);
      return reply.type(MIME_TYPES.HTML).send(renderToString(jsxElement));
    },
  });
}
