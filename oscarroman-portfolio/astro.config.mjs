// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
    site: "https://oscarroman.pe",
    integrations: [
        mermaid({
          theme: "base",
          autoTheme: false, // tu sitio no cambia data-theme, así que evitamos que el plugin fuerce 'default'/'dark'
          mermaidConfig: {
            theme: "base",
            themeVariables: {
              darkMode: true,
              background: "#1e293b",        // fondo del lienzo, igual a tu paleta
              primaryColor: "#334155",      // fondo de cada nodo
              primaryTextColor: "#f1f5f9",  // texto legible
              primaryBorderColor: "#64748b",
              secondaryColor: "#475569",
              tertiaryColor: "#1e293b",
              lineColor: "#94a3b8",         // flechas
              fontSize: "16px",
            },
            flowchart: {
              htmlLabels: true,
              curve: "basis",
              nodeSpacing: 40,
              rankSpacing: 60,
            },
          },
        }),
        mdx(),
        sitemap(),
        tailwind(),
    ],
});
