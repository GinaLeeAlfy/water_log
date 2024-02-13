import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      <h1 className="font-bold">Water Log</h1>
    </div>
  );
};

export default Home;
