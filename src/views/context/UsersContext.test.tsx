import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { ReactNode, useContext } from "react";
import { UsersContext, UsersProvider } from "./UsersContext";
import { RoleEnum } from "./types";
import { loadAllUsers, setRoleUsers, setSelectedRole } from "./actions";

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <UsersProvider>{children}</UsersProvider>;
}

const mockUsers = [
  {
    id: "5",
    name: "John Smith",
    email: "john@smith.com",
    role: "ADMIN",
  },
];

describe("UsersContext", () => {
  test("initial state loads", () => {
    const initialState = {
      allUsers: [],
      selectedRole: RoleEnum.Admin,
      roleUsers: [],
    };

    const { result } = renderHook(() => useContext(UsersContext), {
      wrapper: Wrapper,
    });

    expect(result.current.state).toStrictEqual(initialState);
  });

  test("loadAllUsers action ", () => {
    const { result } = renderHook(() => loadAllUsers(mockUsers), {
      wrapper: Wrapper,
    });

    expect(result.current).toEqual({
      payload: mockUsers,
      type: "loadAllUsers",
    });
  });

  test("setSelectedRole action ", async () => {
    const { result } = renderHook(() => setSelectedRole(RoleEnum.Manager), {
      wrapper: Wrapper,
    });

    expect(result.current).toEqual({
      payload: RoleEnum.Manager,
      type: "setSelectedRole",
    });
  });

  test("setRoleUsers action ", () => {
    const { result } = renderHook(() => setRoleUsers(mockUsers), {
      wrapper: Wrapper,
    });

    expect(result.current).toEqual({
      payload: mockUsers,
      type: "setRoleUsers",
    });
  });
});
