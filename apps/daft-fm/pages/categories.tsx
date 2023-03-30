import { ReactNode } from 'react';
import CategoriesView from '../views/Categories/Categories';

const Categories = (props: Props) => {
  return (
    <>
      <CategoriesView {...props} />
    </>
  );
};

type Props = {
  header: () => ReactNode
}

export default Categories;
