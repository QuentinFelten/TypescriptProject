import { fastify } from "../lib/fastify";
import { expect } from "chai";

describe("/auth", function () {
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

    it("Should return an error if not provided with sufficient data", async function () {
      const response = await fastify.inject({
        method: "POST",
        url: "/auth/login",
        headers: {},
        payload: {},
      });
      expect(response.statusCode).to.not.eq(200);
    });
  });

  describe("POST 'auth/register'", function () {
    it("Should return an error if not provided with sufficient data", async function () {
      const response = await fastify.inject({
        method: "POST",
        url: "/auth/register",
        headers: {},
        payload: {},
      });
      expect(response.statusCode).to.not.eq(200);
    });

    it("Should successfully create account", async function () {
      const response = await fastify.inject({
        method: "POST",
        url: "/auth/register",
        headers: {},
        payload: {
          username: "newUsername",
          password: "newPwd",
          email: "newMail",
          firstName: "fName",
          lastName: "lName",
        },
      });
      expect(response.statusCode).to.eq(200);
    });
  });
});
