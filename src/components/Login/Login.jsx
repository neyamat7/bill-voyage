import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../context/useAuth";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { user, signInUser, signOutUser, githubSignIn, googleSignIn } =
    useAuth();
  const location = useLocation();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [focused, setFocused] = useState(false);

  function handleFocus(e) {
    if (e.target.value.length > 0) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  }

  // function handleSignOut() {
  //   signOutUser()
  //     .then(() => {
  //       console.log("User signed out");
  //     })
  //     .catch((error) => {
  //       console.log("Sign out error:", error);
  //     });
  // }

  function handleSignInWithPassword() {
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        console.log("successfully logged in");
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  // function handleForgetPassword() {
  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       alert("password reset email has been sent, plz check your email");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }

  function handleGoogleSignIn() {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function handleGithubLogin() {
  //   githubSignIn()
  //     .then((result) => {
  //       console.log(result.user);
  //       navigate(location?.state || "/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 h-screen">
      <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 w-[400px] rounded-lg">
        <h1 className="text-3xl text-center font-bold mb-5">Login</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                handleFocus(e);
              }}
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPass ? "text" : "password"}
              placeholder="Password"
            />
            <span
              onClick={() => setShowPass((prev) => !prev)}
              className={`absolute right-1 top-2 text-2xl ${
                focused ? "flex" : "hidden"
              }`}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="flex items-center justify-end">
            <a
              // onClick={handleForgetPassword}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </div>

        <button
          onClick={handleSignInWithPassword}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button>
        <p className="mt-3">
          Don't Have an Account?{" "}
          <Link to="/register" className="text-blue-600 font-bold">
            Register
          </Link>
        </p>
      </form>

      <div>
        <button
          onClick={handleGoogleSignIn}
          className="bg-slate-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center gap-2"
        >
          <FcGoogle size={24} /> Sign in with Google
        </button>

        {/* <button
          onClick={handleGithubLogin}
          className="bg-gray-500 mt-5 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Sign in with Github
        </button> */}
      </div>
    </div>
  );
};

export default Login;
