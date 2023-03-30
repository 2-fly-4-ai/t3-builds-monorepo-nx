import { render } from '@testing-library/react';

import ProductPageWFilter from './product-page-w-filter';

describe('ProductPageWFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductPageWFilter />);
    expect(baseElement).toBeTruthy();
  });
});
