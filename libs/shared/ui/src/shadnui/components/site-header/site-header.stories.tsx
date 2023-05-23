import { Story, Meta } from '@storybook/react';
import { SiteHeader } from './site-header';

export default {
  title: 'Site Header',
  component: SiteHeader,
} as Meta;

const Template: Story = () => <SiteHeader />;

export const Default = Template.bind({});
