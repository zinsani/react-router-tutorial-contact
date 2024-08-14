import { render } from "@testing-library/react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { userEvent } from "@testing-library/user-event";

export const renderWithRouter = (
  routes: RouteObject[],
  { route = "/" } = {},
) => {
  window.history.pushState({}, "Test page", route);
  return {
    user: userEvent.setup(),
    ...render(<RouterProvider router={createBrowserRouter(routes)} />),
  };
};
