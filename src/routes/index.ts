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
  handler: (req, res) => {
    res.send({ hello: "world" });
  },
};

fastify.get("/", options);
