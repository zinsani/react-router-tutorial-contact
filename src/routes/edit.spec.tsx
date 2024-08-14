import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { routes } from "../main";
import { renderWithRouter } from "../../tests/test-helpers";

describe("contacts/edit", () => {
  it("has the edit page with '/contacts/1234/edit' url", async () => {
    renderWithRouter(routes, { route: "/contacts/1234/edit" });

    expect(location.pathname).toMatch(/contacts\/1234\/edit/i);
    expect(await screen.findByTestId("contact-form")).toBeDefined();
  });

  it("has empty input fields at first", async () => {
    renderWithRouter(routes, { route: "/contacts/1234/edit" });

    const allInputs: HTMLInputElement[] = await screen.findAllByRole("input");
    expect(allInputs.every((item) => item.value == "")).toBeTruthy();
  });
});
