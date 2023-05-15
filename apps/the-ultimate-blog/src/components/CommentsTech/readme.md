## IMPORTS

- `Dialog` and `Transition` components are imported from the `@headlessui/react` library, and are used to create a modal dialog that slides in from the right side of the screen when the `showCommentSidebar` prop is set to `true`.

- The `HiXMark` component is imported from the `react-icons/hi2` library, and is used to display an X icon in the top right corner of the dialog. When clicked, it sets the `showCommentSidebar` state to `false`.

- The `useForm` hook is imported from the `react-hook-form` library, and is used to manage the state and validation of the comment form.

- The `zodResolver` function is imported from the `@hookform/resolvers/zod` library, and is used to validate the form data using a schema defined with the `z` library.

- The `z` library is imported and used to define the comment form schema, which requires a minimum of 3 characters for the comment text field.

- The `trpc` hook is imported from the `utils/trpc` file, and is used to call the `submitComment` and `getComments` mutations and queries defined in the `post.rpcl.ts` file.

- The `toast` function is imported from the `react-hot-toast` library, and is used to display success and error messages when the comment is submitted or there is an error.

- The `dayjs` library is imported and the `relativeTime` plugin is extended to format the comment timestamps as relative time (e.g. "2 hours ago").

## DECLARATIONS:

- `dayjs.extend(relativeTime);`: This line imports and extends the `dayjs` library to format relative time.

- `type CommentSidebarProps`: This line defines a type for the props passed to the `CommentSidebar` component.

- `type CommentFormType`: This line defines a type for the form data of the `CommentSidebar` component.

- `export const commentFormSchema`: This line creates a validation schema for the `CommentSidebar` form using the `zod` library.

- `const CommentSidebar`: This is a functional component that takes in `showCommentSidebar`, `setShowCommentSidebar`, and `postId` as props and renders a comment sidebar.

- `useForm`: This is a hook from the `react-hook-form` library that provides form handling and validation functionality to the `CommentSidebar` component.

- `trpc.useContext().post`: This gets the `post` service from the `trpc` library and assigns it to the `postRoute` variable.

- `trpc.post.submitComment.useMutation`: This creates a mutation hook for submitting a comment to a post and defines success and error handlers.

- `trpc.post.getComments.useQuery`: This creates a query hook for getting comments for a post.

## WHAT IT DOES:

This code is defining a component called CommentSidebar. This component takes three props: showCommentSidebar, setShowCommentSidebar, and postId. It first imports Transition.Root from the next-react-headlessui library and sets the showCommentSidebar prop to be the condition for showing this component.

Inside the Transition.Root, it renders a dialog box with a fixed position at the right-top corner of the screen, which opens up when the showCommentSidebar prop is set to true. The dialog box contains a form with a text area for users to submit a comment, and a "Comment" button that is enabled only when the form is valid. The handleSubmit function is called when the form is submitted and it passes the form data to a function called submitComment.mutate with the postId added to the data.

The submitComment function is defined using trpc.post.submitComment.useMutation. It has onSuccess and onError callbacks for handling the response when the mutation is successful or when there's an error. On success, it shows a success message using the toast library and resets the form to its initial state. On error, it shows an error message using the toast library.

The component also fetches comments for the post using trpc.post.getComments.useQuery. When the query is successful, it maps over the comments and displays each comment along with its author and timestamp. The dayjs library is used to format the timestamp to a human-readable format.
