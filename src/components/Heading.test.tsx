import Heading from "./Heading";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

test("Heading component renders its children", () => {
  const { getByRole } = render(<Heading>My heading</Heading>);

  const headingWithText = getByRole("heading", {
    name: "My heading",
  });

  expect(headingWithText).toBeVisible();
});
