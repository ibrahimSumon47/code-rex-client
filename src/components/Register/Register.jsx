import React, { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser, logout } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      alert(
        "password not valid Minimum eight characters, at least one letter and one number"
      );
      return;
    }

    createUser(email, password, { setDisplayName: false })
      .then((result) => {
        logout();
        const createdUser = result.user;
        form.reset();
        updateProfile(createdUser, {
          displayName: name,
          photoURL: photoURL,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  return (
    <div className="pb-10">
      <h1 className="text-3xl text-center py-5 font-bold">Please Register</h1>
      <form
        onSubmit={handleRegister}
        className="max-w-md mx-auto border rounded-lg p-10"
        style={{ backgroundColor: "#1d344d" }}
      >
        <div className="mb-4">
          <label className="block font-bold mb-2 text-white" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        {/* <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="photoURL">
            Photo URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="photoUrl"
            name="photoURL"
            type="url"
            placeholder="Enter your photo URL"
          />
        </div> */}
        <div className="mb-4">
          <label className="block font-bold mb-2 text-white" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-bold mb-2 text-white" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex mb-5 gap-3 ">
          <input
            onClick={handleAccepted}
            type="checkbox"
            className="checkbox checkbox-sm border-white"
          />
          <p className="text-white">Agree to our trems and condition.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={!accepted}
          >
            Register
          </button>
        </div>
        <p className="mt-5 text-white">
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
