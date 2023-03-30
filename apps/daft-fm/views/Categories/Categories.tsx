import { CategoryPageWFilter } from '@front-end-nx/shared/ui';
import { ReactNode } from 'react';
import styles from './Categories.module.scss';

const CategoriesView = (props: Props) => {
  return (
    <div className={styles['ui-categories']}>
      {props.header()}
      <CategoryPageWFilter />
    </div>
  );
};

type Props = {
  header: () => ReactNode;
};

export default CategoriesView;
