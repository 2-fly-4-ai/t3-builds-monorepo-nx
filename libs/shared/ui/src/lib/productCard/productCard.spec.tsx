import { render } from '@testing-library/react';

import ProductCard from './productCard';

describe('ProductCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductCard />);
    expect(baseElement).toBeTruthy();
  });
});
