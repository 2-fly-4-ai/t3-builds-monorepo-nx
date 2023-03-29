import ColumnCompact from '../../lib/column-compact/column-compact';
import ColumnWithDates from '../../lib/column-with-dates/column-with-dates';
import styles from './product-page-w-filter.module.scss';

export function ProductPageWFilter(props: ProductPageWFilterProps) {
  return (
    <div className={styles['ui-product-w-filter__wrapper']}>
      <div className={styles['ui-product-w-filter__left']}>
        <ColumnWithDates />
      </div>
      <div className={styles['ui-product-w-filter__right']}>
        <ColumnCompact />
      </div>
    </div>
  );
}

/* eslint-disable-next-line */
export type ProductPageWFilterProps = {}

export default ProductPageWFilter;
