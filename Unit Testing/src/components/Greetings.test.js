import { render, screen } from '@testing-library/react';
import Greetings from './Greetings';
import userEvent from '@testing-library/user-event';

describe("<Greetings />", () => {
  test("renders 'Hello, World'", () => {
    render(<Greetings/>);
    const helloWorldElement = screen.getByText(/Hello, World/);
    expect(helloWorldElement).toBeInTheDocument();
  })

  test("renders 'click button to change'", () => {
    render(<Greetings/>);
    const matchedElement = screen.getByText(/click button to change/i);
    expect(matchedElement).toBeInTheDocument();
  })

  test("renders 'geetings' after button is clicked", () => {
    render(<Greetings/>);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const greetingElement = screen.getByText(/greetings/i);
    expect(greetingElement).toBeInTheDocument();
  })

  test("renders not 'click button to change' after button is clicked", () => {
    render(<Greetings/>);

    // button click
    const btn = screen.getByRole('button');
    userEvent.click(btn);

    const matchedElement = screen.queryByText(/click button to change/i);
    expect(matchedElement).toBeNull();
  })
})