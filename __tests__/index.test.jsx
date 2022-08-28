import { render, screen } from '@testing-library/react';
import Home from 'pages/_app';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    const { getByText } = render(<Home />);
    const headingElement = getByText('Hello World');
    expect(headingElement).toBeInTheDocument();
  });
});
