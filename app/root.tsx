import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStyles from "./styles/global.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Diary",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/picnic",
    },
    {
      rel: "stylesheet",
      href: globalStyles,
    },
  ];
};
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <AppLayout>
          <Outlet />
        </AppLayout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function AppLayout({ children }) {
  return (
    <>
      <header className="app-header">
        <Link to="/" className="app-logo">
          App Logo
        </Link>
        <Link to="/diary">Diary</Link>
        <Link to="/photos">Photos</Link>
      </header>
      {children}
    </>
  );
}
