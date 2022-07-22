import { render } from '@testing-library/react';

import FilmList from './FilmList';

describe('FilmList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilmList />);
    expect(baseElement).toBeTruthy();
  });
});
