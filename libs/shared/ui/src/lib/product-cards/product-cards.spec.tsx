import { render } from '@testing-library/react';

import ProductCards from './product-cards';

describe('ProductCards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductCards />);
    expect(baseElement).toBeTruthy();
  });
});
