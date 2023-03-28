import { render } from '@testing-library/react';

import ColumnCompact from './column-compact';

describe('ColumnCompact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColumnCompact />);
    expect(baseElement).toBeTruthy();
  });
});
