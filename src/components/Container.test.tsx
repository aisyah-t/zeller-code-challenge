import { Container, FlexContainer } from "./Container";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

test("Container component renders its children", () => {
  const { getByText } = render(<Container>Container</Container>);

  const container = getByText("Container");

  expect(container).toBeVisible();
});

test("FlexContainer component renders its children", () => {
  const { getByText } = render(
    <FlexContainer>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </FlexContainer>
  );

  const first = getByText("1");
  const second = getByText("2");
  const third = getByText("2");

  expect(first).toBeVisible();
  expect(second).toBeVisible();
  expect(third).toBeVisible();
});
