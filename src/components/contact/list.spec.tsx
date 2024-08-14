import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactList from "./list";
import { ContactDTO } from "../../types";
import { renderWithRouter } from "../../../tests/test-helpers";

describe("Contact/List", () => {
  it("show 'No contacts' when the data is empty", () => {
    render(<ContactList contacts={undefined} />);
    expect(screen.getByText("No contacts")).toBeDefined();
  });

  it("show item list of given data", () => {
    const contacts: ContactDTO[] = [
      {
        id: "d74c6db3-5ff7-4975-aabf-543deb0dc46a",
        first: "first",
        last: "last",
        avatar: "",
        twitter: "",
        notes: "",
        createdAt: Date.now(),
        favorite: false,
      },
      {
        id: "b3f5889a-8481-4d8d-b403-f7ca28b85cca",
        first: "first 2",
        last: "last 2",
        avatar: "",
        twitter: "",
        notes: "",
        createdAt: Date.now(),
        favorite: true,
      },
    ];
    const routes = [
      {
        path: "/",
        element: <ContactList contacts={contacts} />,
      },
    ];
    renderWithRouter(routes);
    expect(screen.getAllByTestId("contact-item")).toHaveLength(contacts.length);
  });
});
