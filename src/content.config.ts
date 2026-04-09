import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const dataCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content' }),
  schema: z.union([
    z.object({
      name: z.string(),
      role: z.string(),
      paragraphs: z.array(z.string()),
      contact: z.object({
        email: z.string(),
        buttonText: z.string(),
        github: z.string(),
        linkedin: z.string(),
      }),
    }),
    z.object({
      experiences: z.array(
        z.object({
          period: z.string(),
          role: z.string(),
          company: z.string(),
          location: z.string(),
          description: z.string(),
          highlights: z.array(z.string()),
        }),
      ),
    }),
    z.object({
      projects: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
          link: z.string().optional(),
          github: z.string().optional(),
          tags: z.array(z.string()),
        }),
      ),
    }),
    z.object({
      home: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string(),
      }),
      experience: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string(),
      }),
      projects: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string(),
      }),
      notfound: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string(),
      }),
    }),
  ]),
});

export const collections = {
  data: dataCollection,
};
