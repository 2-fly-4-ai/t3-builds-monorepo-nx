import { Meta } from '@storybook/react';
import { HeaderLogo, LogoType } from './header-logo';

export default {
  component: HeaderLogo,
  title: 'HeaderLogo',
} as Meta<LogoType>;

export const Primary = (args: LogoType) => <HeaderLogo {...args} />;
Primary.args = {
  label: 'My Logo',
  wrapperStyle: 'default',
  logoInfo: {
    src: 'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    width: 200,
    height: 50,
    alt: 'My Logo',
    href: 'https://example.com',
  },
};
