import React from 'react';
import { Link } from 'react-router-dom';

const AccountVerified: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-green-50 border border-green-200 rounded-lg shadow-md max-w-md mx-auto">
      <i className="ri-check-double-line text-green-600 text-6xl mb-4"></i>
      <h1 className="text-2xl font-bold text-green-800 mb-2">
        Account Verified!
      </h1>
      <p className="text-gray-700 text-center">
        Your account has been successfully verified. You can now enjoy all the
        features and benefits.
      </p>
      <div className="flex justify-center flex-col mt-4">
        <Link
          to="/login"
          className="w-full py-2 px-4 bg-slate-700 text-white font-semibold rounded-md shadow-sm hover:bg-gray-300 hover:text-black focus:outline-none text-center"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default AccountVerified;
