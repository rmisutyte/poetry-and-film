import { render, screen } from "@testing-library/react";
import ImageTile from "./ImageTile";

describe("Header component", () => {
  const defaultProps = {
    imageSrc: "test",
    alt: "test",
  };
  it("Should render", async () => {
    render(<ImageTile {...defaultProps} />);
    const imageTile = await screen.findByAltText("test");
    expect(imageTile).toBeInTheDocument();
  });
});
