import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logger from "./pages/Logger";
import Spinner from "./components/Spinner";
import AuthenticationGuard from "./AuthenticationGuard";
import NavBar from "./components/NavBar";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex min-w-60 flex-col items-center">
        <NavBar />
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/callback"
          element={<AuthenticationGuard component={Logger} />}
        />
      </Routes>
    </>
  );
};

export default App;
