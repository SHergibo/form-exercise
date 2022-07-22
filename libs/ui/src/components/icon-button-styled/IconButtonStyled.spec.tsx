import { render } from '@testing-library/react';

import IconButtonStyled from './IconButtonStyled';

describe('IconButtonStyled', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconButtonStyled />);
    expect(baseElement).toBeTruthy();
  });
});
