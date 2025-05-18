/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import APICaller from "./APICaller";
import Home from "./Home";
import { SWRConfig } from "swr";


const fetcher = async (url: string) => {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
  return (await r.json());
};


const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
      <BrowserRouter basename="/">         {/* SPA base path */}
        <Routes>
          <Route path="/" element={<Home />} />          {/* default */}
          <Route path="/api-caller" element={<APICaller />} />     {/* only here */}
        </Routes>
      </BrowserRouter>
    </SWRConfig>
  </StrictMode>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
