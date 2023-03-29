import { ProductPageWFilter } from '@front-end-nx/shared/ui';
import { ReactNode } from 'react';
import styles from './products.module.scss';

const ProductsView = (props: Props) => {
  return (
    <div className={styles['ui-products']}>
      {props.header()}
      <ProductPageWFilter />
    </div>
  );
};

type Props = {
  header: () => ReactNode;
};

export default ProductsView;
