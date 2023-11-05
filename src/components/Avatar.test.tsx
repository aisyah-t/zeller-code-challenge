import Avatar from "./Avatar";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

test("Avatar component renders the initial passed", () => {
  const { getByText } = render(<Avatar initial="Z" />);

  const initial = getByText("Z");

  expect(initial).toBeVisible();
});
