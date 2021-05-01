import { Routes, Route, Navigate } from "react-router-dom";
import { useStatus } from "./Context/LoaderContext";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";
const App = () => {
  const { status } = useStatus();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <ProtectedRoute path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
