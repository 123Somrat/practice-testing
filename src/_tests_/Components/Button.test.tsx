import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../../Components/Button";

describe("button", () => {
  it("button showing", () => {
    const onClick = jest.fn();
    render(<Button tittle="choose a station" onClick={onClick} />);
    const button = screen.getByText("choose a station");
    expect(button).toHaveTextContent("choose a station");

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(2);
   
  });
});
