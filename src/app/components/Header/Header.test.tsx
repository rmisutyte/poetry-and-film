import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  it("Should render", () => {
    render(<Header />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Life on film"
    );
  });
});
