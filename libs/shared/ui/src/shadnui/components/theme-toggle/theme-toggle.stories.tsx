import { Story, Meta } from '@storybook/react';
import { ThemeToggle } from './theme-toggle';

export default {
  title: 'ThemeToggle',
  component: ThemeToggle,
} as Meta;

const Template: Story = () => <ThemeToggle />;

export const Default = Template.bind({});
