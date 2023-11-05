import { Users } from "./views";
import { UsersProvider } from "./views/context/UsersContext";

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
