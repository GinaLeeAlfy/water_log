import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="rounded border-2 border-gray-400 bg-white px-2 py-2  hover:border-blue-600 sm:px-4"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
