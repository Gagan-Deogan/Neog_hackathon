import "./assests/css/base.css";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { Dashboard } from "./Pages/Dashboard";
import { Channels } from "./Components/Channels";
import { Snakbar } from "./Components/Snakbar";
import { useSnakbarContext } from "./Context/SnakbarContext";
import { Channel } from "./Pages/Channel/Channel";

const App = () => {
  const { snakbarStatus } = useSnakbarContext();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <ProtectedRoute path="/profile" element={<Profile />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="/create" element={<Channels />}></Route>
          <Route path="/channelName" element={<Channel />}></Route>
        </Route>
      </Routes>
      {snakbarStatus["isShow"] === true && <Snakbar></Snakbar>}
    </div>
  );
};

export default App;
