import { Story, Meta } from '@storybook/react';
import { DocsSidebarNav, DocsSidebarNavProps } from './sidebar-nav';

export default {
  title: 'Docs Sidebar Navigation',
  component: DocsSidebarNav,
} as Meta;

const Template: Story<DocsSidebarNavProps> = (args) => (
  <DocsSidebarNav {...args} />
);

const sampleItems = [
  {
    title: 'Introduction',
    href: '/docs/introduction',
  },
  {
    title: 'Getting Started',
    href: '/docs/getting-started',
  },
  {
    title: 'API Reference',
    items: [
      {
        title: 'useClient',
        href: '/docs/api/use-client',
      },
      {
        title: 'useServer',
        href: '/docs/api/use-server',
      },
      {
        title: 'useLogger',
        href: '/docs/api/use-logger',
      },
    ],
  },
];

export const Default = Template.bind({});
Default.args = {
  items: sampleItems,
};
