import { UsersAction, UsersActions } from "./UsersContext";
import { RoleEnum, User } from "./types";

export function loadAllUsers(allUsers: User[]): UsersAction {
  return { type: UsersActions.LoadAllUsers, payload: allUsers };
}

export function setSelectedRole(role: RoleEnum): UsersAction {
  return { type: UsersActions.SetSelectedRole, payload: role };
}

export function setRoleUsers(roleUsers: User[]): UsersAction {
  return { type: UsersActions.SetRoleUsers, payload: roleUsers };
}
