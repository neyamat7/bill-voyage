// import { sendEmailVerification } from "firebase/auth";
// import { auth } from "../../firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../context/useAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [focused, setFocused] = useState(false);

  const { createUser } = useAuth();

  function handleFocus(e) {
    if (e.target.value.length > 0) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  }

  function handleRegister(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    // const charLengthCheck = /^.{6,}$/;
    // const uppercaseCheck = /[A-Z]/;
    // const lowercaseCheck = /[a-z]/;
    // const checkOtherChar = /[^\w\s]/;
    // const checkDigit = /[0-9]/;
    // const checkWhitespace = /\s/;

    setError("");

    if (!email || !password) {
      setError("please provide your email and password");
      return;
    } else if (!terms) {
      setError("please accept terms and conditions.");
      return;
    }

    // if (!charLengthCheck.test(password)) {
    //   alert("password must be at least 6 char");
    //   return;
    // } else if (!uppercaseCheck.test(password)) {
    //   alert("at least one upperCase letter");
    //   return;
    // } else if (!lowercaseCheck.test(password)) {
    //   alert("at least one lowercase letter");
    //   return;
    // } else if (!checkOtherChar.test(password)) {
    //   alert("at least one special char");
    //   return;
    // } else if (!checkDigit.test(password)) {
    //   alert("at least one digit");
    //   return;
    // } else if (checkWhitespace.test(password)) {
    //   alert("password contains whitespace, that is not allowed");
    //   return;
    // }

    createUser(email, password)
      .then((res) => {
        console.log(password);
        console.log(res.user);
        // sendEmailVerification(auth.currentUser);
        alert("send verification email, plz verify!");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border border-gray-200 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            name="password"
            type={showPass ? "text" : "password"}
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleFocus}
          />
          <span
            onClick={() => setShowPass((prev) => !prev)}
            className={`absolute right-0 top-9 text-2xl ${
              focused ? "flex" : "hidden"
            }`}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Photo URL
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            name="terms"
            type="checkbox"
            id="terms"
            className="mr-2 leading-tight"
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            Accept terms and conditions
          </label>
        </div>
        <p className="text-red-500 font-semibold mb-2">{error}</p>

        <div
          className="flex gap-3
        "
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Register
          </button>

          <button>
            Already Have an Account?{" "}
            <Link className="text-blue-600 font-bold" to="/login">
              Login
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
