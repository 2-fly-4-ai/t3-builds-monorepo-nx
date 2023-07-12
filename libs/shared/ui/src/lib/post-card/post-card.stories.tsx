import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PostCard, PostCardProps } from './post-card';
import { useSession } from 'next-auth/react';
import { createMock, getMock } from 'storybook-addon-module-mock';

export default {
  title: 'PostCard',
  component: PostCard,
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(useSession, 'useSession');
        mock.mockReturnValue([
          {
            user: { name: 'John Doe', email: 'johndoe@example.com' },
            expires: '1',
          },
          false,
        ]);
        return [mock];
      },
    },
  },
} as Meta;

// Create a Template function that renders the PostCard component
const Template: Story<PostCardProps> = (args) => <PostCard {...args} />;

// Export a Default story that uses the Template function with some default props
export const Default = Template.bind({});
Default.args = {
  countlikes: 10,
  post: {
    author: {
      image: 'https://example.com/user-image.jpg',
      name: 'John Doe',
      username: 'john',
    },
    createdAt: new Date(),
    bookmarks: 'example-bookmark',
    slug: 'example-slug',
    title: 'Example title',
    description: 'Example description',
    id: 'example-id',
    likes: 20,
    featuredImage: 'https://example.com/featured-image.jpg',
    tags: ['tag1', 'tag2', 'tag3'],
  },
  bookmarkPost: {
    mutate: () => {},
  },
  removeBookmark: {
    mutate: () => {},
  },
};

// You can export more stories here if you want to show different variations of your component
