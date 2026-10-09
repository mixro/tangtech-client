import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router";
import App from "./App";
import { SeoContext } from "./lib/seo";
import "./styles/global.css";

export { allRoutes } from "./routes";

/** Render one URL to HTML, waiting for lazy pages to load. Returns { html, meta }. */
export async function render(url) {
  const meta = {};
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <SeoContext.Provider value={meta}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoContext.Provider>
    </StrictMode>
  );
  const html = await new Promise((resolve, reject) => {
    let out = "";
    prelude.on("data", (c) => (out += c));
    prelude.on("end", () => resolve(out));
    prelude.on("error", reject);
  });
  return { html, meta };
}
