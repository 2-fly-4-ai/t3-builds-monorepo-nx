import { render } from '@testing-library/react';

import ColumnWithDates from './column-with-dates';

describe('ColumnWithDates', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColumnWithDates />);
    expect(baseElement).toBeTruthy();
  });
});
