import { fastify } from "../lib/fastify";

describe("/", function () {
  describe("GET root '/'", function () {
    it("should return ", async function () {
      const response = await fastify.inject({
        method: "GET",
        url: "/",
        headers: {},
        payload: {},
      });
    });
  });
});
