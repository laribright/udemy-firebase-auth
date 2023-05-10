import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profle";
import { auth } from "./firebase";
import { useAppDispatch } from "./hooks/storeHook";
import { login } from "./features/authSlice";
import AuthRoutes from "./components/HOC/AuthRoutes";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user && user.email)
        dispatch(
          login({
            email: user.email,
            id: user.uid,
            photoUrl: user?.photoURL || null,
          })
        );
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<AuthRoutes />}>
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="auth" element={<Auth />} />
    </Routes>
  );
};

export default App;
