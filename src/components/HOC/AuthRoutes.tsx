import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../../hooks/storeHook";

const AuthRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);

  return Boolean(user) ? <Outlet /> : <Navigate to="/auth" />;
};

export default AuthRoutes;
