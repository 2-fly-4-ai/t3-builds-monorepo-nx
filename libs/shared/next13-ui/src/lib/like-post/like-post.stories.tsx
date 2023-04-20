// LikePost.stories.tsx
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { LikePost, LikePostProps } from './like-post';

export default {
  title: 'LikePost',
  component: LikePost,
  argTypes: {
    id: { control: 'text' },
    onComment: { action: 'commented' },
  },
} as Meta;

const Template: Story<LikePostProps> = (args) => {
  // use state to keep track of the like status
  const [isLiked, setIsLiked] = useState(false);

  // define a function to toggle the like status
  const handleToggleLike = (id: string) => {
    setIsLiked((prev) => !prev);
  };

  return (
    <LikePost
      {...args}
      isLiked={isLiked}
      onLike={handleToggleLike}
      onDislike={handleToggleLike}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: '1',
};
