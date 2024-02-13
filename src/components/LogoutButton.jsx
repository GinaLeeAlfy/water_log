import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="right-3 top-3 self-end rounded border-2 border-gray-400 bg-white px-4 py-2 sm:absolute"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
