// import Header from "@/common/Header/Header"
// import ThreeColCommunity from "@/common/Layouts/ThreeColCommunity/ThreeColCommunity"
import styles from './home.module.scss';
import { ThreeColCommunity } from '@front-end-nx/shared/ui';

const Home = () => {
  return (
    <div className={styles['ui-home']}>
      {/* <Header
        wrapperStyle={"ui-df-header__wrapper"}
        logo={{
          wrapperStyle: "ui-df-logo__wrapper",
          label: "Daft.FM",
          logoInfo: {
            src: "/daft-fm-blue.png",
            width: 100,
            height: 100,
            alt: "Daft.FM",
            href: "/",
          },
        }}
        menuStyle={"ui-df-header__wrapper--menu"}
        menuItems={[
          {
            label: "Start Here",
            link: "/",
          },
          {
            label: "Explore",
            link: "/",
          },
        ]}
        showSearch
      /> */}
      <ThreeColCommunity />
    </div>
  );
};

export default Home;
