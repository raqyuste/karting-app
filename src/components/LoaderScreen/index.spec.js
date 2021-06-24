import React from "react";
import LoaderScreen from "./index";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("No animation on init", () => {
  const { container } = render(<LoaderScreen />);

  expect(container.firstChild.classList.contains("loading--animation-on")).toBe(
    false
  );
});

it("Animation on 500ms", () => {
  const { container } = render(<LoaderScreen />);
  setTimeout(
    () =>
      expect(
        container.firstChild.classList.contains("loading--animation-on")
      ).toBe(true),
    500
  );
});
