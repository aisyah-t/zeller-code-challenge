import { User } from "./context/types";
import { Container } from "../components";
import { useContext, useEffect } from "react";
import { UsersContext } from "./context/UsersContext";
import { loadAllUsers } from "./context/actions";

import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "../aws-exports";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListZellerCustomers } from "../graphql/queries";
import { UserList, UserTypes } from "./UserTypesAndList";
Amplify.configure(awsconfig);

interface ListZellerCustomersQuery {
  listZellerCustomers: {
    items: User[];
  };
}

export function Users() {
  const { state, dispatch } = useContext(UsersContext);
  const { allUsers } = state;

  async function fetchZellerCustomers() {
    try {
      const customers = await API.graphql<
        GraphQLQuery<ListZellerCustomersQuery>
      >(graphqlOperation(ListZellerCustomers));

      const customersData = customers.data?.listZellerCustomers.items ?? [];

      dispatch(loadAllUsers(customersData));
    } catch (err) {
      console.error("Error fetching ListZellerCustomers query");
    }
  }

  useEffect(() => {
    if (allUsers.length === 0) {
      fetchZellerCustomers();
    }
  }, [allUsers]);

  return (
    <Container>
      <UserTypes />
      <UserList />
    </Container>
  );
}
export default Users;
