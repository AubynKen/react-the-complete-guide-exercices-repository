import { render, screen } from '@testing-library/react';
import Greetings from './Greetings';

describe("<Greetings />", () => {
  test("renders 'Hello, World'", () => {
    render(<Greetings/>);
    const matchedElement = screen.getByText(/Hello, World/);
    expect(matchedElement).toBeInTheDocument();
  })
})