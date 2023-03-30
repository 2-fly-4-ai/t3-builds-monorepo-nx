import { render } from '@testing-library/react';

import ColumnFilter from './column-filter';

describe('ColumnFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColumnFilter />);
    expect(baseElement).toBeTruthy();
  });
});
