import { FastifyInstance } from "fastify";
import { renderToString } from "react-dom/server";
import * as shopSchema from "../schemas/json/shop.json";
import { Shop } from "../schemas/types/shop";
import { Product } from "../schemas/types/product";
import { PathParams } from "../schemas/types/pathParams"
import * as buySchema from "../schemas/json/buy.json";
import * as productSchema from "../schemas/json/product.json";
import * as pathParamSchema from "../schemas/json/pathParams.json";
import { Buy } from "../schemas/types/buy";
import showBuyProductHTML from "../templates/buyProductHTML";
import * as productExample from "../specs/apple.json";

enum MIME_TYPES {
  HTML = "text/html",
  JSON = "application/json",
  PDF = "application/pdf",
}

export async function shopRoutes(fastify: FastifyInstance) {
  fastify.route<{ Body: Shop }>({
    method: "GET",
    url: "/",
    schema: {
      response: { 200: shopSchema },
    },
    handler: async function ShopRender(request, reply): Promise<Shop> {
      // return shopExample;
      return {} ;
    },
  });

  fastify.route<{ Body: Product, Params: PathParams}>({
    method: "GET",
    url: "/product/:id",
    schema: {
      params: pathParamSchema,
      response: { 200: productSchema },
    },
    handler: async function ProductRender(request, reply): Promise<Product> {
      return productExample;
    },
  });

  fastify.route<{ Body: Buy }>({
    method: "GET",
    url: "/product/buy",
    schema: {
      body: buySchema,
      response: { 200: buySchema },
    },
    handler: async function AuthRender(request, reply): Promise<Buy> {
      const jsxElement = showBuyProductHTML(request.body);
      return reply.type(MIME_TYPES.HTML).send(renderToString(jsxElement));
    },
  });
}
