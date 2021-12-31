import { render } from '@testing-library/react';
import React from 'react';

import ActiveLink from './ActiveLink';

describe('Link', () => {
  test('renders the Link component', () => {
    render(<ActiveLink text="Hello world!" />);
  });
});
