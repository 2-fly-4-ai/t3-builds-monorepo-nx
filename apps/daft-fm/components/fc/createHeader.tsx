import { Header } from "@front-end-nx/shared/ui";

const createHeader = () => {
  return (
    <Header
      wrapperStyle={'ui-df-header__wrapper'}
      logo={{
        wrapperStyle: 'ui-df-logo__wrapper',
        label: 'Daft.FM',
        logoInfo: {
          src: '/daft-fm-blue.png',
          width: 100,
          height: 100,
          alt: 'Daft.FM',
          href: '/',
        },
      }}
      menuStyle={'ui-df-header__wrapper--menu'}
      menuItems={[
        {
          label: 'Start Here',
          link: '/categories',
        },
        {
          label: 'Explore',
          link: '/',
        },
      ]}
      showSearch
    />
  );
};

export default createHeader;
