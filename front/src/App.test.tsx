import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import {
  MemoryRouter,
  BrowserRouter,
  Router,
  BrowserRouterProps,
} from "react-router-dom";
import store from "./store/store";
import App from "./App";

jest.mock("./LoginPage/LoginPage", () => ({
  __esModule: true,
  default: () => {
    return <>Mock Login Page</>;
  },
}));
jest.mock("./MapPage/MapPage", () => ({
  __esModule: true,
  default: () => {
    return <>Mock map page</>;
  },
}));

describe("tests for App", () => {
  it("should render login page on initial route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
    <App />
</MemoryRouter>
     );
    expect(screen.getByText("Mock Login Page")).toBeInTheDocument();
  });

  it("routes to the map page ", async () => {
    render(
      <MemoryRouter initialEntries={["/map"]}>
    <App />
</MemoryRouter>
    )

});
})
