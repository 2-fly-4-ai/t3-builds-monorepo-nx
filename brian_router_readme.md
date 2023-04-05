# Post Router

This module exports a router that handles the CRUD operations for posts using [trpc](https://trpc.io/).

## Usage

To use the post router in your app, you need to import it and add it to your main router. Then you can access the procedures from the client side using the `useQuery` and `useMutation` hooks.

## Procedures

The post router defines the following procedures:

### `createPost`

This procedure creates a new post in the database using the input object that matches the `WriteFormSchema`. The input object has four required properties:

- `title`: The title of the post
- `description`: A short summary of the post
- `text`: The plain text content of the post
- `html`: The HTML content of the post

The procedure also generates a unique `slug` for the post based on the title using [slugify](https://www.npmjs.com/package/slugify).

The procedure is protected by an authentication middleware that checks if the user is logged in and has a valid session. If not, it throws an error.

The procedure returns nothing on success.

### `getPosts`

This procedure returns an array of posts from the database. Each post object has the following properties:

- `id`: The unique identifier of the post
- `slug`: The URL-friendly string of the post title
- `title`: The title of the post
- `description`: A short summary of the post
- `createdAt`: The date and time when the post was created
- `author`: An object with the name and image of the author
- `bookmarks`: An array of bookmarks that belong to the current user (if logged in)

The procedure is public and can be accessed by anyone.

### `getPost`

This procedure returns a single post object by its `slug`. The post object has the same properties as in `getPosts` plus two more:

- `text`: The plain text content of the post
- `html`: The HTML content of the post

The procedure throws an error if the slug is not found in the database.

The procedure is also public and can be accessed by anyone.
