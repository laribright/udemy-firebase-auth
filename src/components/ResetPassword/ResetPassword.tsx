import { Dispatch, FC, SetStateAction } from "react";

interface ResetPasswordProps {
  isOpen: boolean;
  onClose: () => void;
  handlePasswordReset: () => Promise<void>;
  resetPasswordEmail: string;
  resetPasswordSuccess: string | null;
  resetPasswordError: string | null;
  setResetPasswordEmail: Dispatch<SetStateAction<string>>;
}

const ResetPassword: FC<ResetPasswordProps> = (props) => {
  const {
    isOpen,
    onClose,
    handlePasswordReset,
    resetPasswordEmail,
    resetPasswordSuccess,
    resetPasswordError,
    setResetPasswordEmail,
  } = props;

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center bg-black bg-opacity-50`}
      style={{ transform: `translateY(${isOpen ? "0%" : "-100%"})` }}
    >
      <div className="bg-white rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold mb-4">Password Reset</h1>
        <input
          type="email"
          value={resetPasswordEmail}
          onChange={(e) => setResetPasswordEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
        />
        <button
          onClick={handlePasswordReset}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Reset Password
        </button>
        {resetPasswordSuccess && (
          <p className="text-green-500 mt-2">{resetPasswordSuccess}</p>
        )}
        {resetPasswordError && (
          <p className="text-red-500 mt-2">{resetPasswordError}</p>
        )}
        <button
          onClick={onClose}
          className="text-gray-500 mt-4 text-sm underline hover:text-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
