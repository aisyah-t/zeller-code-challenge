import { ReactNode, createContext, useReducer } from "react";
import { RoleEnum, StateReducer, User } from "./types";

interface UsersState {
  allUsers: User[];
  selectedRole: RoleEnum;
  roleUsers: User[];
}

const initialState = {
  allUsers: [],
  selectedRole: RoleEnum.Admin,
  roleUsers: [],
};

export enum UsersActions {
  LoadAllUsers = "loadAllUsers",
  SetSelectedRole = "setSelectedRole",
  SetRoleUsers = "setRoleUsers",
}

export type UsersAction =
  | { type: UsersActions.LoadAllUsers; payload: User[] }
  | { type: UsersActions.SetSelectedRole; payload: RoleEnum }
  | { type: UsersActions.SetRoleUsers; payload: User[] };

function reducer(state: UsersState, action: UsersAction): UsersState {
  switch (action.type) {
    case UsersActions.LoadAllUsers:
      return { ...state, allUsers: action.payload };
    case UsersActions.SetSelectedRole:
      return { ...state, selectedRole: action.payload };
    case UsersActions.SetRoleUsers:
      return {
        ...state,
        roleUsers: action.payload.map((user) => ({
          ...user,
          role: user.role === RoleEnum.Admin ? "Admin" : "Manager",
        })),
      };
  }
}

export const UsersContext = createContext<
  StateReducer<UsersState, UsersAction>
>({
  state: initialState,
  dispatch: () => {
    console.error(
      "A bad dispatch was just made. Make sure this action is done from within a Users Provider."
    );
  },
});

interface UsersProviderProps {
  children: ReactNode;
}

export function UsersProvider({ children }: UsersProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
}
