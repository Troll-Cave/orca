import { render } from '@testing-library/react';

import AppCatalogListing from './app-catalog-listing';

describe('AppCatalogListing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppCatalogListing />);
    expect(baseElement).toBeTruthy();
  });
});
