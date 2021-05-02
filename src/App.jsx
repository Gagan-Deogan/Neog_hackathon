import { Routes, Route } from "react-router-dom";
import { useStatus } from "./Context/LoaderContext";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { Dashboard } from "./Pages/Dashboard";
import "./assests/css/base.css";
import { Channel } from "./Pages/Channel/Channel";

const App = () => {
  const { status } = useStatus();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <ProtectedRoute path="/profile" element={<Profile />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="/channelName" element={<Channel />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
