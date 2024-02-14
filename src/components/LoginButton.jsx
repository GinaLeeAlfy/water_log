import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="rounded border-2 border-gray-400 bg-white px-2 py-2 sm:px-4"
    >
      Log In/Sign up with Google
    </button>
  );
};

export default LoginButton;
