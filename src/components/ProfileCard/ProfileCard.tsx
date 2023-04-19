import { Dispatch, FC, SetStateAction } from "react";

import { User } from "../../models/User";

interface ProfileCardProps {
  handleLogout: () => Promise<void>;
  user: User;
  setResetPassword: () => void;
}

const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    handleLogout,
    user: { photoUrl, email },
    setResetPassword,
  } = props;

  return (
    <div className="w-screen h-[80vh] flex items-center justify-center">
      <div className="w-full p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10">
          {photoUrl ? (
            <img
              className="w-24 h-24 mb-3 object-cover rounded-full shadow-lg"
              src={photoUrl}
              alt="Avatar"
            />
          ) : (
            <div className="w-24 h-24 mb-3 text-4xl font-bold grid place-content-center bg-green-200 rounded-full shadow-lg">
              {email[0].toUpperCase()}
            </div>
          )}
          <span className="text-sm text-gray-500 ">{email}</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button
              type="button"
              onClick={setResetPassword}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Change Password
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
