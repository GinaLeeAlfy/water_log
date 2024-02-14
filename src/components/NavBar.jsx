import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="prose flex w-full flex-col items-center justify-center gap-2 px-1 py-1 sm:flex sm:py-7">
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}

      <h1 className=" font-bold ">Water Log</h1>
    </nav>
  );
};

export default NavBar;
