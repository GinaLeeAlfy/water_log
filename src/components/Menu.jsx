import { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import DeleteContentButton from "./DeleteContentButton";

const Menu = ({ userId }) => {
  const { isAuthenticated } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="right-3 top-3 flex gap-2 self-end sm:absolute">
      {isOpen ? (
        !isAuthenticated ? (
          <LoginButton />
        ) : (
          <div className="flex gap-2">
            <DeleteContentButton userId={userId} /> <LogoutButton />
          </div>
        )
      ) : null}
      <button
        className="rounded border-2 border-gray-400 bg-white px-4 py-2 "
        onClick={toggle}
      >
        &#9776;
      </button>
    </div>
  );
};

export default Menu;
