import { FastifyInstance } from "fastify";
import { renderToString } from "react-dom/server";
import * as shopSchema from "../schemas/json/shop.json";
import { Shop } from "../schemas/types/shop";
import showShopHTML from "../templates/shopHTML";
import * as productSchema from "../schemas/json/product.json";
import { Product } from "../schemas/types/product";
import showProductHTML from "../templates/productHTML";
import * as buySchema from "../schemas/json/buy.json";
import { Buy } from "../schemas/types/buy";
import showBuyProductHTML from "../templates/buyProductHTML";

enum MIME_TYPES {
  HTML = "text/html",
  JSON = "application/json",
  PDF = "application/pdf",
}

export async function shopRoutes(fastify: FastifyInstance) {
  fastify.route<{ Body: Shop }>({
    method: "GET",
    url: "/shop",
    schema: {
      body: shopSchema,
      response: { 200: shopSchema },
    },
    handler: async function ShopRender(request, reply): Promise<Shop> {
      const jsxElement = showShopHTML(request.body);
      return reply.type(MIME_TYPES.HTML).send(renderToString(jsxElement));
    },
  });

  fastify.route<{ Body: Product}>({
    method: "GET",
    url: "/shop/product",
    schema: {
      body: productSchema,
      response: { 200: productSchema },
    },
    handler: async function ProductRender(request, reply): Promise<Product> {
      const jsxElement = showProductHTML(request.body);
      return reply.type(MIME_TYPES.HTML).send(renderToString(jsxElement));
    },
  })

  fastify.route<{ Body: Buy}>({
    method: "GET",
    url: "/shop/product/buy",
    schema: {
      body: buySchema,
      response: { 200: buySchema },
    },
    handler: async function BuyRender(request, reply): Promise<Buy> {
      const jsxElement = showBuyProductHTML(request.body);
      return reply.type(MIME_TYPES.HTML).send(renderToString(jsxElement));
    },
  })
}
