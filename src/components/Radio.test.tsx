import { Radio } from "./Radio";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { useState } from "react";

function MockRadio() {
  const [checkedOption, setCheckedOption] = useState("");

  return (
    <Radio
      label="Huey"
      isChecked={checkedOption === "huey"}
      onChange={() => setCheckedOption("huey")}
      id="huey"
    />
  );
}

test("Radio component renders with label and unchecked by default", () => {
  const { getByRole } = render(<MockRadio />);

  const huey = getByRole("radio", {
    name: "Huey",
  });

  expect(huey).toBeVisible();
  expect(huey).not.toBeChecked();
});

test("Gets checked when clicked", () => {
  const { getByRole } = render(<MockRadio />);

  const huey = getByRole("radio", {
    name: "Huey",
  });

  fireEvent.click(huey);
  expect(huey).toBeChecked();
});
