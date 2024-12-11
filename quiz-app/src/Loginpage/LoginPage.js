import React, {useState} from "react";
import "./LoginPage.css";
// import "./SignupPage.css"
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TbBrandAppleFilled } from "react-icons/tb";

const LoginPage = () => {
const [loginDetails, setLoginDetails] = useState({
  email: "",
  password: ""
})

const handleLoginDetails = (e) => {
  const {name, value} = e.target
  setLoginDetails({...loginDetails, [name]: value})
}

const handleLogin = (e) => {
e.preventDefault()
setLoginDetails({
  email: "",
  password: ""
})
}
  return (
    <div className="Loginpage-container d-flex flex-lg-row align-items-center">
      <section className="signupform-section bg-white">
        <header className=" text-center fs-4">
          Welcome Back!
        </header>
        <div className="othersOption d-flex flex-lg-row align-items-center justify-content-center gap-2">
          <button className="googlesignuo">
            <FcGoogle className=" fs-3" /> Google
          </button>
          <button className="googlesignuo">
            <TbBrandAppleFilled className=" fs-3" /> ios
          </button>
        </div>
        <div className=" d-flex flex-row gap-2 align-items-center justify-content-center option-text mt-2">
          <span className="line">
            <hr></hr>
          </span>
          <span className="mini-text">or sign up with</span>
          <span className="line">
            <hr></hr>
          </span>
        </div>

        <section>
          <form onSubmit={handleLogin}>
            <div className="info">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={loginDetails.email}
                placeholder="example@gmail.com"
                className="info-input"
                onChange={handleLoginDetails}
              />
            </div>
            <div className="info">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={loginDetails.password}
                placeholder="Enter your password"
                className="info-input"
                onChange={handleLoginDetails}
              />
            </div>
            <button className="createacct-btn">Log in Now</button>
          </form>
        </section>
        <section>
          <p className="loginoption text-center fw-normal fs-6 ">
            Don't have an account?{" "}
            <Link className="text-decoration-none" to="/signup">
              <b className="login-text">Signup</b>
            </Link>
          </p>
        </section>
      </section>
      <section className="signupimg-section loginimg">
        <header>
          <Link to="/">
            <h2 className="fw-bold fs-2 logo-login">TechQuest</h2>
          </Link>
        </header>
        {/* <img src={signupimg} alt="signup=img" className="signupimage" /> */}
        <div className="login-header">
          <h3>Get Back to Learning with Ease</h3>
          <p>
            Log in to pick up where you left off and keep progressing towards
            your goals
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
