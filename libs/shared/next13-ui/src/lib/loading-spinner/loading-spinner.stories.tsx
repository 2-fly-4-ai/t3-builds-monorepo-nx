import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoadingSpinner from './loading-spinner';

export default {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {
    // no args for this component
  },
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = (args) => (
  <LoadingSpinner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // no args for this component
};
