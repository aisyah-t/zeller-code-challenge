import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserDetails, UserList, UserTypes } from "./UserTypesAndList";
import { UsersProvider } from "./context/UsersContext";

describe("UserTypes", () => {
  test("Renders heading 'User Types', radio options 'Admin' and 'Manager' and 'Admin' selected by default", () => {
    const { getByRole } = render(<UserTypes />);

    const userTypesHeading = getByRole("heading", {
      name: "User Types",
    });

    const adminRadio = getByRole("radio", {
      name: "Admin",
    });

    const managerRadio = getByRole("radio", {
      name: "Manager",
    });

    expect(userTypesHeading).toBeVisible();

    expect(adminRadio).toBeVisible();
    expect(adminRadio).toBeChecked();

    expect(managerRadio).toBeVisible();
    expect(managerRadio).not.toBeChecked();
  });

  test("Selecting a new user type updates the checked option", () => {
    const { getByRole } = render(
      <UsersProvider>
        <UserTypes />
      </UsersProvider>
    );

    const adminRadio = getByRole("radio", {
      name: "Admin",
    });

    const managerRadio = getByRole("radio", {
      name: "Manager",
    });

    fireEvent.click(managerRadio);

    expect(managerRadio).toBeChecked();
    expect(adminRadio).not.toBeChecked();
  });
});

describe("UsersDetails", () => {
  test("Renders the initial, name and role of the user", () => {
    const { getByText } = render(
      <UserDetails
        user={{
          id: "ej",
          name: "Emma Jones",
          email: "emma@jones.com",
          role: "Manager",
        }}
      />
    );

    const initial = getByText("E");
    expect(initial).toBeVisible();

    const fullName = getByText("Emma Jones");
    expect(fullName).toBeVisible();

    const role = getByText("Manager");
    expect(role).toBeVisible();
  });
});

describe("UsersList", () => {
  test("Renders heading 'Admin Users' and list only admin users by default", () => {
    const { getByRole, queryByText } = render(
      <UsersProvider>
        <UserList />
      </UsersProvider>
    );

    const adminUsersHeading = getByRole("heading", {
      name: "Admin Users",
    });

    expect(adminUsersHeading).toBeVisible();

    const managerUsersHeading = queryByText("Manager Users");
    expect(managerUsersHeading).toBeNull();
  });
});
