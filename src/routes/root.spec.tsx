import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "../../tests/test-helpers";
import { routes } from "../main";

describe("sidebar", () => {
  it("has search input", async () => {
    renderWithRouter(routes);

    const searchInput = await screen.findByTestId("searchinput");

    expect(searchInput).toBeDefined();
  });

  it("add new item to the list by clicking Add button", async () => {
    const { user } = renderWithRouter(routes);

    const newButton = await screen.findByRole("button", { name: "New" });
    await user.click(newButton);

    await waitFor(
      async () => {
        const contactForm = await screen.findByTestId("contact-form");
        expect(contactForm).toBeDefined();
        expect(location.pathname).toMatch(/contacts\/.+\/edit/i);
      },
      { timeout: 2000 },
    );
  });
});
