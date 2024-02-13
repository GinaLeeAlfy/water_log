import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

const Logger = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      <p>water to log wooo</p>
    </div>
  );
};

export default Logger;
