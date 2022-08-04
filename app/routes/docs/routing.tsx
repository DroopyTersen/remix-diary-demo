import { useState } from "react";

let getFilePath = (routeSegment) => {
  if (routeSegment === "root") {
    return "app/root.tsx";
  }
  if (routeSegment === "sales") {
    return `app/routes/sales.tsx`;
  }
  if (routeSegment === "invoices") {
    return `app/routes/sales/invoices.tsx`;
  }
  if (routeSegment === "$invoiceId") {
    return `app/routes/sales/invoices/$invoiceId.tsx`;
  }
};
export default function () {
  let [routeSegment, setRouteSegment] = useState("root");

  let filepath = getFilePath(routeSegment);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Nested Routing</h1>
      <p>
        Nested Routing is the general idea of coupling segments of the URL to
        your component hierarchy.
      </p>

      <h2>Example</h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <a
            href="#"
            className={routeSegment === "root" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setRouteSegment("root");
            }}
          >
            example.com
          </a>
          <a
            href="#"
            className={routeSegment === "sales" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setRouteSegment("sales");
            }}
          >
            /sales
          </a>
          <a
            href="#"
            className={routeSegment === "invoices" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setRouteSegment("invoices");
            }}
          >
            /invoices
          </a>
          <a
            href="#"
            className={routeSegment === "$invoiceId" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setRouteSegment("$invoiceId");
            }}
          >
            /1234
          </a>
        </div>
        <code>{filepath}</code>
      </div>
      <img
        src={`/routes-${routeSegment}.png`}
        style={{ maxHeight: "600px", maxWidth: "100%", marginTop: "20px" }}
      />

      <p>Given a URL, Remix can tell</p>
      <ul>
        <li>Which components should display (duh)</li>
        <li>The code split JavaScript bundles to load (oooh nice)</li>
        <li>The data dependencies of your url. (Wait.... what?)</li>
        <ul>
          <li>Remix is also in charge of data fetching</li>
          <li>
            Each route segment can define the data that it needs (
            <code>loader</code>)
          </li>
          <li>
            So Remix will automatically fetch exactly the data you need for a
            given url.
          </li>
          <li>
            By the time your components render, the data is there. No checking
            for "isLoading" flags.
          </li>
        </ul>
      </ul>
    </main>
  );
}
