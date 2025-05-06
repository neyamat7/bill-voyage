import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../context/useAuth";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, googleSignIn } = useAuth();
  const location = useLocation();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const [focused, setFocused] = useState(false);

  const notify = () =>
    toast.success("Your have successfully logged into your account!");

  function handleFocus(e) {
    if (e.target.value.length > 0) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  }

  function handleSignInWithPassword() {
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        console.log("successfully logged in");
        notify();
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err?.message);
      });
  }

  function handleGoogleSignIn() {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
        setError(error?.message);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-[calc(100vh-409px)]">
      <div className="bg-white shadow-md my-20 py-6 rounded-md">
        <form className="px-6 sm:px-8 pb-8 mb-4 w-[280px] min-[390px]:w-[350px] sm:w-[400px]">
          <h1 className="text-3xl text-center font-bold mb-10">Login</h1>
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="username"
              type="email"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
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
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <p className="text-red-500 font-semibold mb-2">{error}</p>
          <button
            onClick={handleSignInWithPassword}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign In
          </button>
          <p className="mt-3">
            Don't Have an Account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-bold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>

        <div>
          <button
            onClick={handleGoogleSignIn}
            className="bg-white hover:bg-gray-200 text-slate-600 border border-gray-300 font-bold py-2 px-4 rounded  flex items-center gap-2 w-fit mx-auto mt-0"
          >
            <FcGoogle size={24} /> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
