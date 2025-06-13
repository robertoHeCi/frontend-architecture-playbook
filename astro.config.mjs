// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Frontend Architecture Playbook",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/robertoHeCi/frontend-architecture-playbook"
        }
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            {
              label: "Getting Started",
              items: [
                { label: "Introduction", link: "/guides/getting-started/" },
                {
                  label: "Basic Concepts",
                  link: "/guides/getting-started/basics"
                },
                {
                  label: "Design Patterns",
                  link: "/guides/getting-started/patterns"
                }
                // { label: 'State Management', link: '/guides/getting-started/state-management' },
              ]
            }
            // {
            // 	label: 'Architecture',
            // 	items: [
            // 		{ label: 'Layered Architecture', link: '/guides/architecture/layered' },
            // 		{ label: 'Clean Architecture', link: '/guides/architecture/clean' },
            // 		{ label: 'Micro Frontends', link: '/guides/architecture/micro-frontends' },
            // 	],
            // },
            // {
            // 	label: 'Examples',
            // 	items: [
            // 		{ label: 'Mini Commerce', link: '/guides/examples/mini-commerce' },
            // 	],
            // },
          ]
        }
        // {
        // label: "Reference",
        // items: [
        // 		{ label: 'Patterns', link: '/reference/patterns' },
        // 		{ label: 'Best Practices', link: '/reference/best-practices' },
        // { label: "Tools", link: "/reference/tools" }
        // ]
        // }
        // {
        // 	label: 'Resources',
        // 	items: [
        // 		{ label: 'Books', link: '/resources/books' },
        // 		{ label: 'Articles', link: '/resources/articles' },
        // 		{ label: 'Videos', link: '/resources/videos' },
        // 	],
        // },
      ]
    })
  ],
  image: {
    service: passthroughImageService()
  }
});
