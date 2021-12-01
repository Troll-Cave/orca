import { render } from '@testing-library/react';

import AppOrca from './app-orca';

describe('AppOrca', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppOrca />);
    expect(baseElement).toBeTruthy();
  });
});
