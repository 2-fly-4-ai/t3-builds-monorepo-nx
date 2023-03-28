import { render } from '@testing-library/react';

import ColumnWithCta from './column-with-cta';

describe('ColumnWithCta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColumnWithCta />);
    expect(baseElement).toBeTruthy();
  });
});
