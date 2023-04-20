import { render } from '@testing-library/react';

import NavMenu from './nav-menu';

describe('NavMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavMenu />);
    expect(baseElement).toBeTruthy();
  });
});
