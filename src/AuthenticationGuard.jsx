import { withAuthenticationRequired } from "@auth0/auth0-react";
import Home from "./pages/Home";

const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Home />,
  });

  return <Component />;
};

export default AuthenticationGuard;
