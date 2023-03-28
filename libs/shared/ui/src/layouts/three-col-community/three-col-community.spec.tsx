import { render } from '@testing-library/react';

import ThreeColCommunity from './three-col-community';

describe('ThreeColCommunity', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThreeColCommunity />);
    expect(baseElement).toBeTruthy();
  });
});
