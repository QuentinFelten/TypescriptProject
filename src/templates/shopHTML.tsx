import * as React from "react";
import { Shop } from "../../src/schemas/types/shop";

export default function showShopHTML(shop: Shop) {
  console.log("called Shop HTML");

  return (
    <>
      {/* Shop Page */}
      .<br />
      <h1>Shop Page</h1>
      <br />
    </>
  );
}