import * as React from "react";
import { Auth } from "../../src/schemas/types/auth";

export default function showInvoiceHTML(invoice: Auth) {
  console.log("called Auth HTML");

  return (
    <>
      {/* Auth Page */}
      .<br />
      <h1>Auth Page</h1>
      <br />
    </>
  );
}
