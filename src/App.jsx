import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Logger from "./Logger";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Logger />} />
      </Routes>
    </>
  );
};

export default App;
