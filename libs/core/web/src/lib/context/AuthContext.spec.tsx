import { render } from '@testing-library/react';

import Context from './AuthContext';

describe('Context', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Context />);
    expect(baseElement).toBeTruthy();
  });
});
