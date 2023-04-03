import { render } from '@testing-library/react';

import BlogPageProse from './blog-page-prose';

describe('BlogPageProse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogPageProse />);
    expect(baseElement).toBeTruthy();
  });
});
