## Storybook Debug reference

You can find the reference for debugging Storybook at the following link: [Storybook Debug Reference](https://github.com/nareshbhatia/tailwindcss-storybook/blob/main/.storybook/preview-head.html)

## How to add node modules into your components

To add the `interweave` module to your shared UI component library in NX, you can follow these steps:

1. Install the `interweave` module as a dev dependency in your UI library:

   ```shell
   npm install --save-dev interweave
   ```

2. In your library's `tsconfig.json` file, make sure that the `esModuleInterop` and `allowSyntheticDefaultImports` options are set to `true`:

   ```json
   {
     "compilerOptions": {
       "esModuleInterop": true,
       "allowSyntheticDefaultImports": true
     }
   }
   ```

3. In your library's `tsconfig.lib.json` file, add `interweave` to the `compilerOptions.paths` object to map the module to a shorter import path. Here's an example:

   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@mylibrary/_": ["src/_"],
         "interweave": ["node_modules/interweave/dist/esm/index.js"]
       }
     }
   }
   ```

4. In your UI library's code, you can now import and use the `Interweave` component like this:

   ```tsx
   import React from 'react';
   import Interweave from 'interweave';

   interface MyComponentProps {
     content: string;
   }

   export function MyComponent({ content }: MyComponentProps) {
     return <Interweave content={content} />;
   }
   ```

   With these steps, you should now be able to use the `interweave` module in your shared UI component library in NX.

## Fix StoryBookIssueLocked

```javascript
managerWebpack: (config, options) => {
  options.cache.set = () => Promise.resolve();
  return config;
}
```

## TW-colors-font

To apply fonts, you can refer to the following link: [TW-colors-font](https://github.com/L-Blondy/tw-colors/issues/1)

---

**Image-resizing-on-blog**

```jsx
<Image
  src={getPost.data?.featuredImage ?? 'null'}
  alt={getPost.data?.title}
  priority //VERY IMPORTANT STOPS IMAGE RESIZING
  fill
  className="object-cover"
/>
```

`priority` //VERY IMPORTANT STOPS IMAGE RESIZING

---
