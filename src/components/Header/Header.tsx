import { Link } from "react-router-dom";

import { headerClasses } from "./headerClasses";
import { useAppSelector } from "../../hooks/storeHook";

const Header = () => {
  const {
    header,
    navContainer,
    navContent,
    linkHome,
    linkProfile,
    linkSignIn,
  } = headerClasses;

  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className={header}>
      <nav className={navContainer}>
        <div className={navContent}>
          <div className="flex items-center w-full">
            <Link to="/" className={linkHome}>
              Home
            </Link>
            {Boolean(!user) && (
              <Link to="/auth" className={linkSignIn}>
                Sign in
              </Link>
            )}
            {user ? (
              <Link to="/profile">
                {user?.photoUrl ? (
                  <img
                    className={linkProfile}
                    src={user.photoUrl}
                    alt="Avatar"
                  />
                ) : (
                  <div className="w-24 h-24 mb-3 text-4xl font-bold grid place-content-center bg-green-200 rounded-full shadow-lg">
                    {user?.email[0].toUpperCase()}
                  </div>
                )}
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
