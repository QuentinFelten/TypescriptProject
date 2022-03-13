import { fastify } from "../lib/fastify";
import { expect } from "chai";

describe("/", function () {
  describe("POST '/auth/login'", function () {
    it("Should be successful", async function () {
      const response = await fastify.inject({
        method: "POST",
        url: "/auth/login",
        headers: {},
        payload: { username: "mail", password: "pwd" },
      });
      expect(response.statusCode).to.eq(200);
    });
  });
});
