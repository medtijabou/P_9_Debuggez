import { fireEvent, render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPES } from "./index";

describe("When a button is created", () => {
  it("the button must include a title", () => {
    render(<Button title="my-button" type={BUTTON_TYPES.DEFAULT} />);
    const buttonElement = screen.getByTitle("my-button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("the button must display a label", () => {
    render(<Button>label</Button>);
    const buttonElement = screen.getByText(/label/);
    expect(buttonElement).toBeInTheDocument();
  });

  describe("and it's clicked", () => {
    it("an onClick event is executed", () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick}>label</Button>);
      const buttonElement = screen.getByTestId("button-test-id");
      fireEvent.click(buttonElement); // simplification du fireEvent
      expect(onClick).toHaveBeenCalledTimes(1); // vérification du nombre d'appels
    });
  });

  describe("and the selected type is submit", () => {
    it("an input submit is created", () => {
      render(<Button type={BUTTON_TYPES.SUBMIT}>label</Button>);
      const buttonElement = screen.getByTestId("button-test-id");
      expect(buttonElement).toHaveAttribute("type", "submit"); // vérification de l'attribut
    });
  });
});
