import ColumnFilter from '../../lib/column-filter/column-filter';
import ProductCards from '../../lib/product-cards/product-cards';
import styles from './product-page-w-filter.module.scss';

export function ProductPageWFilter(props: ProductPageWFilterProps) {
  return (
    <div className={styles['ui-product-w-filter__wrapper']}>
      <div className={styles['ui-product-w-filter__left']}>
        <ColumnFilter />
      </div>
      <div className={styles['ui-product-w-filter__right']}>
        <ProductCards />
      </div>
    </div>
  );
}

/* eslint-disable-next-line */
export type ProductPageWFilterProps = {}

export default ProductPageWFilter;
