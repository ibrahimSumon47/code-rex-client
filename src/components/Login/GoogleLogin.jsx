import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";

const GoogleLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        const googleLogged = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <div
      className="flex gap-2 mt-5 border p-1 px-4  rounded focus:outline-none focus:shadow-outline bg-slate-50 items-center pl-24"
      style={{ width: "365px" }}
    >
      <FaGoogle className="mt-1 text-blue-600" />
      <button
        className="text-black mb-1 font-semibold mt-2"
        onClick={handleGoogleSignIn}
      >
        Login with Google{" "}
      </button>
    </div>;
};

export default GoogleLogin;
