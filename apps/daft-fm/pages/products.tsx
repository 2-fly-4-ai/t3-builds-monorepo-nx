import ProductsView from '../views/Products/Products';

const Products = (props: Props) => {
  return (
    <>
      <ProductsView {...props} />
    </>
  );
};

type Props = {
  header: () => ReactNode
}

export default Products;
