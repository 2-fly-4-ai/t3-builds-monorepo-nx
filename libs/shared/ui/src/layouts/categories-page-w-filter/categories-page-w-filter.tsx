import ColumnFilter from '../../lib/column-filter/column-filter';
import CategoriesCards from '../../lib/category-cards/category-cards';
import styles from './Categories-page-w-filter.module.scss';

export function CategoriesPageWFilter(props: CategoriesPageWFilterProps) {
  return (
    <div className={styles['ui-cat-w-filter__wrapper']}>
      <div className={styles['ui-cat-w-filter__left']}>
        <ColumnFilter />
      </div>
      <div className={styles['ui-cat-w-filter__right']}>
        <CategoriesCards />
      </div>
    </div>
  );
}

/* eslint-disable-next-line */
export type CategoriesPageWFilterProps = {}

export default CategoriesPageWFilter;
