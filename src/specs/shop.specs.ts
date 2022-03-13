import { fastify } from "../lib/fastify";
import { expect } from "chai";
import * as shopExample from "./shop.json";
import * as productExample from "./apple.json"

describe("/shop", function () {
  describe("GET '/shop'", function () {
    it("Should return list of items", async function () {
      const response = await fastify.inject({
        method: "GET",
        url: "/shop",
        headers: {},
        payload: {},
      });
      expect(response.statusCode).to.eq(200);
      // expect shopExample
    });

    describe("GET '/shop/product'", function () {
      it("Should return product details", async function () {
        const response = await fastify.inject({
          method: "GET",
          url: "/shop/product",
          headers: {},
          payload: {},
        });
        expect(response.statusCode).to.eq(200);
        // expect productExample
      });
    });

    describe("GET '/shop/product/buy'", function () {
      it("Should confirm product has been bought", async function () {
        const response = await fastify.inject({
          method: "GET",
          url: "/shop/product",
          headers: {},
          payload: {},
        });
        expect(response.statusCode).to.eq(200);
      });
    });
  });
});
