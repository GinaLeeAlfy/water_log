import { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Menu = () => {
  const { isAuthenticated } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {isOpen ? !isAuthenticated ? <LoginButton /> : <LogoutButton /> : null}
      <button onClick={toggle}>&#9776;</button>
    </div>
  );
};

export default Menu;
