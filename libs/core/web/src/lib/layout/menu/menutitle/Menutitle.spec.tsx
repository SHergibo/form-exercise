import { render } from '@testing-library/react';

import Menutitle from './Menutitle';

describe('Menutitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Menutitle />);
    expect(baseElement).toBeTruthy();
  });
});
