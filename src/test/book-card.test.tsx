import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookCard from "@/components/books/book-card";
import { Book } from "@/types/book";

describe("BookCard", () => {
  afterEach(() => {
    cleanup();
  });

  const bookWithDescription: Book = {
    id: "1",
    title: "Test Book",
    description: "This is a test description for the book.",
    imageUrl: "https://example.com/cover.jpg",
  };

  const bookWithoutDescription: Book = {
    id: "2",
    title: "Book Without Description",
  };

  it("renders the book title", () => {
    render(<BookCard book={bookWithDescription} />);
    expect(
      screen.getByRole("heading", { name: "Test Book" }),
    ).toBeInTheDocument();
  });

  it("initially hides the description", () => {
    render(<BookCard book={bookWithDescription} />);
    const description = screen.queryByText(/This is a test description/);
    expect(description).toBeInTheDocument();
    expect(description?.parentElement).toHaveClass("max-h-0");
  });

  it("shows description when toggle button is clicked", async () => {
    const user = userEvent.setup();
    render(<BookCard book={bookWithDescription} />);

    const toggleButton = screen.getByRole("button", {
      name: /show description/i,
    });
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");

    await user.click(toggleButton);

    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("button", { name: /hide description/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/This is a test description/).parentElement,
    ).toHaveClass("max-h-96");
  });

  it("hides description when toggle button is clicked twice", async () => {
    const user = userEvent.setup();
    render(<BookCard book={bookWithDescription} />);

    const toggleButton = screen.getByRole("button", {
      name: /show description/i,
    });
    await user.click(toggleButton);
    await user.click(screen.getByRole("button", { name: /hide description/i }));

    expect(
      screen.getByRole("button", { name: /show description/i }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("shows 'No description available' when book has no description", () => {
    render(<BookCard book={bookWithoutDescription} />);
    expect(screen.getByText(/no description available/i)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /show description/i }),
    ).not.toBeInTheDocument();
  });

  it("has proper accessibility attributes on toggle button", () => {
    render(<BookCard book={bookWithDescription} />);
    const toggleButton = screen.getByRole("button", {
      name: /show description/i,
    });

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(toggleButton).toHaveAttribute("aria-controls", "book-description-1");
  });
});
