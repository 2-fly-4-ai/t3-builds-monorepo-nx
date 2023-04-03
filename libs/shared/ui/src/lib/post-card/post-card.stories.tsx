import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostCard from './post-card';

export default {
  title: 'PostCard',
  component: PostCard,
  argTypes: {},
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  post: {
    author: {
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'John Doe',
    },
    createdAt: '2021-12-15T12:34:56Z',
    slug: 'how-to-code-a-react-app',
    title: 'How to code a React app',
    description:
      'In this tutorial, I will show you how to create a simple React app using TypeScript and Next.js.',
  },
};
