import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hellow World! as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see you if the button was not clicked", () => {
    render(<Greeting />);

    const goodToSeeYouText = screen.getByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeYouText).toBeInTheDocument();
  });

  test('renders "Changed!" if the button is clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();

  });

  test('good to see you not rendered after button is clicked', () => {
    render(<Greeting />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const outputElement = screen.queryByText("good to see you", {exact: false});

    expect(outputElement).toBeNull();
  });
});
