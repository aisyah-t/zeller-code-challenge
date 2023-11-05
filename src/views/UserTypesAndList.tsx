import { RoleEnum, User } from "./context/types";
import {
  Avatar,
  DetailsPanel,
  Divider,
  FlexContainer,
  Heading,
  Radio,
} from "../components";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "./context/UsersContext";
import { setSelectedRole, setRoleUsers } from "./context/actions";
import { useRoleUsers, useSelectedRole } from "./context/hooks";

export function UserTypes() {
  const { state, dispatch } = useContext(UsersContext);
  const { allUsers, selectedRole } = state;

  const [selectedType, setSelectedType] = useState(selectedRole);

  useEffect(() => {
    if (allUsers.length > 0) {
      dispatch(
        setRoleUsers(allUsers.filter(({ role }) => role === selectedRole))
      );
    }
  }, [allUsers, selectedRole, dispatch]);

  const roleOptions = [
    { label: "Admin", value: RoleEnum.Admin },
    { label: "Manager", value: RoleEnum.Manager },
  ];

  return (
    <FlexContainer isVertical>
      <Heading className="mb-8">User Types</Heading>
      <FlexContainer isVertical>
        {roleOptions.map(({ label, value }) => (
          <Radio
            key={value}
            label={label}
            isChecked={selectedType === value}
            onChange={() => {
              setSelectedType(value);
              if (value !== selectedType) {
                dispatch(setSelectedRole(value));
              }
            }}
            id={label}
            value={value}
          />
        ))}
      </FlexContainer>
      <Divider margin="my-10" />
    </FlexContainer>
  );
}

interface UserDetailsProps {
  user: User;
}

export function UserDetails({ user }: UserDetailsProps) {
  return (
    <FlexContainer gap="gap-x-5">
      <Avatar initial={user.name.charAt(0)} />
      <DetailsPanel title={user.name} subtitle={user.role} />
    </FlexContainer>
  );
}

export function UserList() {
  const selectedRole = useSelectedRole();
  const users = useRoleUsers();

  return (
    <FlexContainer isVertical>
      <Heading className="mb-10">
        {selectedRole === RoleEnum.Admin ? "Admin" : "Manager"} Users
      </Heading>
      <FlexContainer isVertical gap="gap-y-10">
        {users.map((user) => (
          <UserDetails key={user.id} user={user} />
        ))}
      </FlexContainer>
      <Divider margin="mt-8" />
    </FlexContainer>
  );
}
