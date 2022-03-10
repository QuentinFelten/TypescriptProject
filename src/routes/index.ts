const fastify = require("fastify");

// @desc    Login/Landing page
// @route   GET /
const options = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" },
        },
      },
    },
  },
  handler: (_req: any, res: { send: (arg0: { hello: string; }) => void; }) => {
    res.send({ hello: "world" });
  },
};

fastify.get("/", options);
