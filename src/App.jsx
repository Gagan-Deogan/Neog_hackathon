import { Routes, Route, Navigate } from "react-router-dom";
import { useStatus } from "./Context/LoaderContext";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { Login } from "./Pages/Login";
const App = () => {
  const { status } = useStatus();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <ProtectedRoute path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
