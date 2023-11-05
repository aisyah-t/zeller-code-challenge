import { useContext } from "react";
import { UsersContext } from "./UsersContext";
import { RoleEnum, User } from "./types";

export function useSelectedRole(): RoleEnum {
  const { state } = useContext(UsersContext);
  return state.selectedRole;
}

export function useRoleUsers(): User[] {
  const { state } = useContext(UsersContext);
  return state.roleUsers;
}
