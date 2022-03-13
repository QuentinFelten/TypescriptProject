import { expect, use } from "chai";
import { createConnection } from "typeorm";
import { User } from "../entity/User";
import { Allow, validate, validateOrReject } from "class-validator";
import { Product } from "../entity/Product";
import { Allergy } from "../entity/Allergy";

describe("database", function () {
  describe("create users", function () {
    /*it("should reset the database"), async function () {

        createConnection()
            .then(async (connection) => {
              const tables = [""]
            })
            .catch((error) => {
              console.log(error);
              expect(5).to.eq(6);
            });

    };*/

    it("should create a user", async function () {
      const user = new User();

      user.firstName = "Timber";
      user.lastName = "Saw";
      user.email = "a@e.com";
      user.password = "aze";

      validate(user).then((errors) => {
        if (errors.length > 0) {
          console.log(`validation failed for ${user.email}`);
          expect(0).to.equal(1);
        } else {
          createConnection()
            .then(async (connection) => {
              await connection.manager.query(
                `DELETE FROM user WHERE email ="${user.email}";`
              );
              await connection.manager.save(user);
              console.log("Saved a new user with id: " + user.id);

              console.log("Loading users from the database...");
              const users = await connection.manager.query(
                `SELECT * FROM user WHERE id = ${user.id}`
              );
              console.log("Loaded users: ", users);

              expect(users[0].firstName).to.eq("Timber");
            })
            .catch((error) => {
              console.log(error);
              expect(5).to.eq(6);
            });
        }
      });
    });

    it("should create a product", async function () {
      const product = new Product();

      product.type = "wine";
      product.name = "Château Mayne Guyon Origine";

      validate(product).then((errors) => {
        if (errors.length > 0) {
          console.log(`validation failed for ${product.name}`);
          expect(0).to.equal(1);
        } else {
          createConnection()
            .then(async (connection) => {
              await connection.manager.query(
                `DELETE FROM product WHERE name = "${product.name}";`
              );
              await connection.manager.save(product);
              console.log("Saved a new product with id: " + product.id);

              console.log("Loading products from the database...");
              const products = await connection.manager.query(
                `SELECT * FROM product WHERE id = ${product.id}`
              );
              console.log("Loaded products: ", products);

              expect(products[0].name).to.eq("Château Mayne Guyon Origine");
            })
            .catch((error) => {
              console.log(error);
              expect(5).to.eq(6);
            });
        }
      });
    });

    it("should create an allergy", async function () {
      const allergy = new Allergy();

      allergy.name = "soja";

      validate(allergy).then((errors) => {
        if (errors.length > 0) {
          console.log(`validation failed for ${allergy.name}`);
          expect(0).to.eq(1);
        } else {
          createConnection()
            .then(async (connection) => {
              await connection.manager.query(
                `DELETE FROM allergy WHERE name = "${allergy.name}";`
              );
              await connection.manager.save(allergy);
              console.log("Saved a new allergy with id: " + allergy.id);

              console.log("Loading allergies from the database...");
              const allergies = await connection.manager.query(
                `SELECT * FROM allergy WHERE id = ${allergy.id}`
              );
              console.log("Loaded allergies: ", allergies);

              expect(allergies[0].name).to.eq("soja");
            })
            .catch((error) => {
              console.log(error);
              expect(5).to.eq(6);
            });
        }
      });
    });
  });
});
