import * as React from "react";
import { Product } from "../../src/schemas/types/product";

export default function showProductHTML(product: Product) {
  console.log("called Product HTML");

  return (
    <>
      {/* Product Page */}
      .<br />
      <h1>Product Page</h1>
      <br />
    </>
  );
}