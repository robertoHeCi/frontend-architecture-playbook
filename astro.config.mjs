// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    starlight({
      title: "Frontend Architecture Playbook",
      logo: {
        src: "./src/assets/logo.webp",
        alt: "Frontend Architecture Playbook logo"
      },
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/robertoHeCi/frontend-architecture-playbook"
        }
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", link: "/guides/getting-started/" },
            {
              label: "Core Concepts",
              link: "/guides/getting-started/core-concepts"
            }
          ]
        },
        {
          label: "Principles",
          items: [
            {
              label: "Introduction",
              link: "/guides/principles/"
            },
            {
              label: "SOLID Principles",
              link: "/guides/principles/solid-principles"
            },
            {
              label: "Design Patterns",
              link: "/guides/principles/design-patterns"
            },
            {
              label: "State Management",
              link: "/guides/principles/state-management"
            }
          ]
        },
        {
          label: "Architecture",
          items: [
            { label: "Introduction", link: "/guides/architecture/" },
            {
              label: "Layered Architecture",
              link: "/guides/architecture/layered"
            },
            { label: "Clean Architecture", link: "/guides/architecture/clean" }
          ]
        },
        // {
        //   label: "Examples",
        //   items: [
        //     { label: "Mini Commerce", link: "/guides/examples/mini-commerce" }
        //   ]
        // },
        // ,{
        //   label: "Reference",
        //   items: [
        //     { label: "Patterns", link: "/reference/patterns" },
        //     { label: "Best Practices", link: "/reference/best-practices" },
        //     { label: "Tools", link: "/reference/tools" },
        //   ]
        // },
        // {
        //   label: "Resources",
        //   items: [
        //     { label: "Books", link: "/resources/books" },
        //     { label: "Articles", link: "/resources/articles" },
        //     { label: "Videos", link: "/resources/videos" },
        //   ]
        // }
      ]
    })
  ],

  image: {
    service: passthroughImageService()
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
