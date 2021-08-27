import { render } from "@testing-library/react";
import Footer from ".";

describe("Footer component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Footer />);

    expect(getByText("Made with ❤ by Kali to Concrete")).toBeInTheDocument();
  });
});
