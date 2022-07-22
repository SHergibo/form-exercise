import { render } from '@testing-library/react';

import SmallInfoCard from './SmallInfoCard';

describe('SmallInfoCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmallInfoCard />);
    expect(baseElement).toBeTruthy();
  });
});
