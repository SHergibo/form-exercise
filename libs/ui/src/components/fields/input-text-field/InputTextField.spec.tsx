import { render } from '@testing-library/react';

import InputTextField from './InputTextField';

describe('InputTextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputTextField />);
    expect(baseElement).toBeTruthy();
  });
});
