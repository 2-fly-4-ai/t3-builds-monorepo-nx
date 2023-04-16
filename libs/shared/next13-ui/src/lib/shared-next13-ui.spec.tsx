import { render } from '@testing-library/react';

import SharedNext13Ui from './shared-next13-ui';

describe('SharedNext13Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedNext13Ui />);
    expect(baseElement).toBeTruthy();
  });
});
