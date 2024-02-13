import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="right-3 top-3 self-end rounded border-2 border-gray-400 bg-white px-4 py-2 sm:absolute"
    >
      Log In/Sign up with Google
    </button>
  );
};

export default LoginButton;
