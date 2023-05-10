import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { auth } from "../../firebase";

import Header from "../../components/Header/Header";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import { logout } from "../../features/authSlice";
import ResetPassword from "../../components/ResetPassword/ResetPassword";

const Profile = () => {
  const [resetPasswordEmail, setResetPasswordEmail] = useState("");
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState<
    string | null
  >(null);
  const [resetPasswordError, setResetPasswordError] = useState<string | null>(
    null
  );
  const [resetPassword, setResetPassword] = useState(false);

  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };

  const handlePasswordReset = async () => {
    if (!resetPasswordEmail.length) return;
    try {
      await sendPasswordResetEmail(auth, resetPasswordEmail);
      setResetPasswordSuccess(
        "Password reset email sent. Please check your inbox."
      );
      setResetPasswordError(null);
    } catch (error: any) {
      setResetPasswordError(error.message);
      setResetPasswordSuccess(null);
    }
  };

  // useEffect(() => {
  //   if (Boolean(!user)) {
  //     navigate("/auth");
  //   }
  // }, [navigate, user]);

  return (
    <>
      <Header />
      <ResetPassword
        handlePasswordReset={handlePasswordReset}
        isOpen={resetPassword}
        onClose={() => setResetPassword(false)}
        resetPasswordEmail={resetPasswordEmail}
        resetPasswordError={resetPasswordError}
        resetPasswordSuccess={resetPasswordSuccess}
        setResetPasswordEmail={setResetPasswordEmail}
      />
      {user && (
        <ProfileCard
          setResetPassword={() => setResetPassword(true)}
          user={user}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default Profile;
