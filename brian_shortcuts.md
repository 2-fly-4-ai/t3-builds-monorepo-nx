## Run Project

npx nx run daft-fm:serve

## Run StoryBook:

npx nx storybook shared-ui

## Component Generator

npx nx g @nrwl/react:component topic-button --project=shared-ui --style=css

## Page Generator

npx nx generate @nrwl/next:page --name=about --style=css

## Project Generator

npx nx g @nrwl/next:app csv-combiner

## Tailwinds Generator

npx nx g @nrwl/react:setup-tailwind --project=<your app here>

## Documentation Packages Main

NX - https://nx.dev/recipes/other/using-tailwind-css-in-react

Tailwinds - https://v2.tailwindcss.com/docs

Nextjs - https://nextjs.org/docs

Prisma - https://www.prisma.io/docs

## Documentation Packages Secondary

Ckeditor - https://ckeditor.com/docs/

React Hook Forms - https://react-hook-form.com/get-started

react-query - https://tanstack.com/query/v4/docs/react/overview

trpc docs - https://trpc.io/docs

zod - https://zod.dev/

## Authentication

clsx - https://www.npmjs.com/package/clsx

next-auth - https://next-auth.js.org/getting-started/introduction

## Documenation Testing

StoryBook - https://storybook.js.org/docs/react/writing-docs/docs-page

Cypress - https://docs.cypress.io/guides/overview/why-cypress

## UI Tools

radix ui - https://www.radix-ui.com/docs/primitives/overview/introduction

headlessUI - https://headlessui.com/

## Brief Explanation:

@ckeditor/ckeditor5-build-classic: A classic editor build of CKEditor 5, a traditional WYSIWYG editor with a toolbar at the top.

@ckeditor/ckeditor5-build-inline: An inline editor build of CKEditor 5, an editor that shows up when you select some text on the page.

@ckeditor/ckeditor5-editor-balloon: The balloon editor implementation for CKEditor 5, also included in the balloon editor build.

@ckeditor/ckeditor5-link: The link feature for CKEditor 5, allowing you to insert and edit links in your content.

@ckeditor/ckeditor5-react: A React component for CKEditor 5 editors, allowing you to easily integrate them into your React applications.

@headlessui/react: A set of unstyled, accessible UI components for React, designed to integrate with Tailwind CSS.

@hookform/resolvers: Validation resolvers for React Hook Form, a library for building performant forms in React.

@next-auth/prisma-adapter: A Prisma adapter for NextAuth.js, a complete authentication solution for Next.js applications.

@nrwl/next: Support for developing Next.js applications with Nx, a smart and extensible build framework.

@nx-tools/nx-prisma: A plugin for Nx that adds support for Prisma, an ORM for TypeScript and Node.js.

@prisma/client: The Prisma client library that lets you access your database with an auto-generated and type-safe query builder.

@radix-ui/react-dialog: A primitive component for creating accessible modal dialogs in React.

@radix-ui/react-label: A primitive component for creating accessible labels in React.

@tanstack/react-query: A library for fetching, caching, and updating data in React applications without any boilerplate.

@trpc/client: A client library for tRPC, a toolkit for building end-to-end type-safe APIs with TypeScript and Next.js.

@trpc/next: A Next.js integration for tRPC, allowing you to create API routes with tRPC handlers.

@trpc/react: A React integration for tRPC, allowing you to use tRPC hooks and components in your React applications.

@trpc/react-query: A React Query integration for tRPC, allowing you to use tRPC queries and mutations with React Query features.

@trpc/server: A server library for tRPC, allowing you to create type-safe API routers with tRPC procedures.

autoprefixer: A PostCSS plugin that parses your CSS and adds vendor prefixes to CSS rules using values from Can I Use.

class-variance-authority: A library that helps you manage class names in React components with support for variants and modifiers.

classnames: A simple JavaScript utility for conditionally joining class names together.

clsx: A tiny utility for constructing className strings conditionally in React.

dayjs: A 2kB JavaScript date utility library that is compatible with Moment.js API.

html-to-react: A lightweight library that converts raw HTML to a React DOM structure with custom processing instructions.

interweave: A library that safely renders HTML, filters attributes, autowraps text, renders emoji and much more in React.

lucide-react: A collection of beautiful SVG icons for React.

next-auth: A complete open source authentication solution for Next.js applications.

postcss: A tool for transforming CSS with JavaScript plugins.
quill: A powerful rich text editor for the web.

react-hot-toast: A library for adding toast notifications to your React app with ease.

react-icons: A collection of popular icon sets as SVG icons for React.

react-query: A library for fetching, caching, and updating data in React applications without any boilerplate.

slugify: A library that converts a string to a URL-friendly slug.
storybook-addon-theme-changer: An addon for Storybook that allows you to change the theme of your stories dynamically.

superjson: A library that extends JSON to support more types such as Date, RegExp, Set, Map and more.

tailwind-merge: A utility for merging Tailwind CSS class names without duplication or conflicts.

tailwindcss: A utility-first CSS framework that lets you style elements without writing any CSS.

tslib: A runtime library for TypeScript that contains all of the TypeScript helper functions.

zod: A library for parsing and validating any JavaScript or TypeScript data structure.

## Fix StoryBookIssueLocked

managerWebpack: (config, options) => {
options.cache.set = () => Promise.resolve();
return config;
},

## TW-colors-font

Apply fonts - https://github.com/L-Blondy/tw-colors/issues/1

## Storybook Debug reference

https://github.com/nareshbhatia/tailwindcss-storybook/blob/main/.storybook/preview-head.html

## How to add node modules into your components

To add the interweave module to your shared UI component library in NX, you can follow these steps:

Install the interweave module as a dev dependency in your UI library:
css
Copy code
npm install --save-dev interweave
In your library's tsconfig.json file, make sure that the esModuleInterop and allowSyntheticDefaultImports options are set to true:
json
Copy code
{
"compilerOptions": {
"esModuleInterop": true,
"allowSyntheticDefaultImports": true
}
}
In your library's tsconfig.lib.json file, add interweave to the compilerOptions.paths object to map the module to a shorter import path. Here's an example:
json
Copy code
{
"compilerOptions": {
"baseUrl": ".",
"paths": {
"@mylibrary/_": ["src/_"],
"interweave": ["node_modules/interweave/dist/esm/index.js"]
}
}
}
In your UI library's code, you can now import and use the Interweave component like this:
tsx
Copy code
import React from 'react';
import Interweave from 'interweave';

interface MyComponentProps {
content: string;
}

export function MyComponent({ content }: MyComponentProps) {
return <Interweave content={content} />;
}
With these steps, you should now be able to use the interweave module in your shared UI component library in NX.
