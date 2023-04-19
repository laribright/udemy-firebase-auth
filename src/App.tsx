import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profle";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="auth" element={<Auth />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
