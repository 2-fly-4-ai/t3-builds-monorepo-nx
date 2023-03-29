import styles from './home.module.scss';
import { ThreeColCommunity } from '@front-end-nx/shared/ui';
import { ReactNode } from 'react';

const Home = (props: Props) => {
  return (
    <div className={styles['ui-home']}>
      {props.header()}
      <ThreeColCommunity />
    </div>
  );
};

type Props = {
  header: () => ReactNode
}

export default Home;
