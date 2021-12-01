import { render } from '@testing-library/react';

import AppCatalog from './app-catalog';

describe('AppCatalog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppCatalog />);
    expect(baseElement).toBeTruthy();
  });
});
