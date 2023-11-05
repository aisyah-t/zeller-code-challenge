import { Dispatch } from "react";

export enum RoleEnum {
  Admin = "ADMIN",
  Manager = "MANAGER",
}

export interface Role {
  selectedRole: RoleEnum;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}
export interface StateReducer<State, Action> {
  state: State;
  dispatch: Dispatch<Action>;
}
