import { render, screen } from "@testing-library/react";
import { TestimonialCard } from "../../components/TestimonialCard";

describe("TestimonialCard", () => {
  const mockProps = {
    imageUrl: "https://i.pravatar.cc/48",
    title: "John Doe",
    subtitle: "@johndoe",
    content: "This is a great testimonial!",
  };

  it("renders testimonial card with all props", () => {
    render(<TestimonialCard {...mockProps} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("@johndoe")).toBeInTheDocument();
    expect(
      screen.getByText("This is a great testimonial!")
    ).toBeInTheDocument();

    const image = screen.getByAltText("John Doe");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://i.pravatar.cc/48");
  });

  it("applies custom className when provided", () => {
    const { container } = render(
      <TestimonialCard {...mockProps} className="custom-class" />
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("handles long content gracefully", () => {
    const longContent = "Lorem ipsum ".repeat(50);
    render(<TestimonialCard {...mockProps} content={longContent} />);

    expect(screen.getByText(longContent)).toBeInTheDocument();
  });

  it("renders without crashing when minimal props provided", () => {
    render(<TestimonialCard imageUrl="" title="" subtitle="" content="" />);

    // Should not crash even with empty strings
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
