import { render } from '@testing-library/react';

import HeaderLogo from './header-logo';

describe('HeaderLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderLogo />);
    expect(baseElement).toBeTruthy();
  });
});
