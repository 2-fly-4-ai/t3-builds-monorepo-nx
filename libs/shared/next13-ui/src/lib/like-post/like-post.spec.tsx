import { render } from '@testing-library/react';

import LikePost from './like-post';

describe('LikePost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LikePost />);
    expect(baseElement).toBeTruthy();
  });
});
