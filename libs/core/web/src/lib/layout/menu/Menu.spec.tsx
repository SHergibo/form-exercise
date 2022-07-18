import { render } from '@testing-library/react';

import MenuApp from './MenuApp';

describe('MenuApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuApp />);
    expect(baseElement).toBeTruthy();
  });
});
