import DetailsPanel from "./DetailsPanel";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

test("DetailsPanel component renders the title and subtitle passed", () => {
  const { getByText } = render(
    <DetailsPanel title="Huey McDonald" subtitle="Admin" />
  );

  const name = getByText("Huey McDonald");
  const role = getByText("Admin");

  expect(name).toBeVisible();
  expect(role).toBeVisible();
});
