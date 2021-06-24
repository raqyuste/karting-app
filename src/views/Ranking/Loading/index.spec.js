import React from "react";
import Loading from "./index";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("First Row highlighted on init", () => {
  const { container } = render(<Loading />);
  expect(container.childNodes[0].classList.contains("row--highlighted")).toBe(
    true
  );
  expect(container.childNodes[1].classList.contains("row--highlighted")).toBe(
    false
  );
  expect(container.childNodes[2].classList.contains("row--highlighted")).toBe(
    false
  );
});

it("Second row highlighted on 200ms have passed", () => {
  const { container } = render(<Loading />);

  setTimeout(() => {
    expect(container.childNodes[0].classList.contains("row--highlighted")).toBe(
      false
    );
    expect(container.childNodes[1].classList.contains("row--highlighted")).toBe(
      true
    );
    expect(container.childNodes[2].classList.contains("row--highlighted")).toBe(
      false
    );
  }, 200);
});

it("Third row highlighted on 400ms have passed", () => {
  const { container } = render(<Loading />);

  setTimeout(() => {
    expect(container.childNodes[0].classList.contains("row--highlighted")).toBe(
      false
    );
    expect(container.childNodes[1].classList.contains("row--highlighted")).toBe(
      false
    );
    expect(container.childNodes[2].classList.contains("row--highlighted")).toBe(
      true
    );
  }, 400);
});
