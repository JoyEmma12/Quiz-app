import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";
import { FcGoogle } from "react-icons/fc";
import { TbBrandAppleFilled } from "react-icons/tb";
import { RiErrorWarningLine } from "react-icons/ri";
import { ImCheckmark } from "react-icons/im";
import { FaTimes } from "react-icons/fa";
// import signupimg from "./images/signupimg.jpg";

//form validation code
const USER_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SignupPage = () => {
  const userRef = useRef();
  const errorRef = useRef();

  //validate user name details
  const [user, setUser] = useState("");
  const [validateName, setValidateName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  //validate lastname details
  const [userLastname, setUserlastName] = useState("");
  const [validateLastName, setValidateLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  //validate email details
  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  //validate password details
  const [pwd, setPwd] = useState("");
  const [validatePwd, setValidatePwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  //validate confirm password details
  const [matchPwd, setMatchPwd] = useState("");
  const [validateMatchPwd, setValidateMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  //error message
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  //check userinput
  useEffect(() => {
    const checkUser = USER_REGEX.test(user);
    console.log(checkUser);
    console.log(user);
    setValidateName(checkUser);
    setValidateLastName(USER_REGEX.test(userLastname));
  }, [user, userLastname]);

  //check email
  useEffect(() => {
    setValidateEmail(EMAIL_REGEX.test(email));
  }, [email]);

  //check password
  useEffect(() => {
    setValidatePwd(PWD_REGEX.test(pwd));
    setValidateMatchPwd(pwd === matchPwd);
    console.log(`pwd is ${PWD_REGEX.test(pwd)}`);
    console.log(`password is ${pwd}`);
    console.log(`match pwd is ${pwd === matchPwd}`);
    console.log(`match password is ${matchPwd}`);
  }, [pwd, matchPwd]);

  //errmsg
  useEffect(() => {
    setErrMsg("");
  }, [user, userLastname, email, pwd, matchPwd]);

  const handleSignupDetails = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = USER_REGEX.test(userLastname);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = PWD_REGEX.test(pwd);

    if (!v1 || !v2 || !v3 || !v4) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(user, userLastname, email, pwd);
    setSuccessMsg(true);
  };

  //validation

  return (
    <main className="signup-container d-flex flex-lg-row flex-sm-column">
      <section className="signupimg-section">
        <header>
          <Link to="/">
            <h2 className="fw-bold fs-2 logo">TechQuest</h2>
          </Link>
        </header>
        {/* <img src={signupimg} alt="signup=img" className="signupimage" /> */}
        <div className="signup-header">
          <h3>Join the TechQuest Community Today</h3>
          <p>
            Unlock access to quizzes that challenge your skills and help you
            grow in the tech world. With TechQuest, you’re not just taking
            quizzes—you’re embarking on a journey of continuous learning and
            improvement. Sign up now and start your adventure!
          </p>
        </div>
      </section>
      {successMsg ? (
        <section className=" text-center">
          <h1>Success</h1>
          <p>
            <Link>Sign in</Link>
          </p>
        </section>
      ) : (
        <section className="signupform-section bg-white">
          <header className=" text-center fs-4">
            Create your TechQuest account
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
            {/* errmsg display */}
            <p
              ref={errorRef}
              className={errMsg ? "errMsg" : "offscreen"}
              aria-live="assertive">
              {errMsg}
            </p>

            <form onSubmit={handleSignupDetails}>
              <div className="userinfo d-flex flex-lg-row  flex-sm-column gap-3">
                <div className="infos">
                  <label>
                    Firstname
                    <span className={validateName ? "valid" : "hide"}>
                      <ImCheckmark />
                    </span>
                    <span
                      className={validateName || !user ? "hide" : "invalid"}>
                      <FaTimes />
                    </span>
                  </label>
                  <input
                    ref={userRef}
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={user}
                    placeholder="Enter your firstname"
                    autoComplete="off"
                    aria-invalid={validateName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onChange={(e) => setUser(e.target.value)}
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                  <p
                    id="uidnote"
                    className={
                      userFocus && user && !validateName
                        ? "instructions"
                        : "offscreen"
                    }>
                    <RiErrorWarningLine />
                    must be 3 to 24 characters <br />
                    letters, numbers, special symbols are allowed.
                  </p>
                </div>
                <div className="infos">
                  <label>
                    Lastname
                    <span className={validateLastName ? "valid" : "hide"}>
                      <ImCheckmark />
                    </span>
                    <span
                      className={
                        validateLastName || !userLastname ? "hide" : "invalid"
                      }>
                      <FaTimes />
                    </span>
                  </label>
                  <input
                    ref={userRef}
                    type="text"
                    name="lastname"
                    value={userLastname}
                    placeholder="Enter your lastname"
                    aria-invalid={validateLastName ? "false" : "true"}
                    aria-describedby="lastnamenote"
                    onFocus={() => setLastNameFocus(true)}
                    onBlur={() => setLastNameFocus(false)}
                    onChange={(e) => setUserlastName(e.target.value)}
                  />
                  <p
                    id="lastnamenote"
                    className={
                      lastNameFocus && userLastname && !validateLastName
                        ? "instructions"
                        : "offscreen"
                    }>
                    8 to 24 characters allowed <br />
                    must include uppercase letters, lowercase letter, numbers
                    and special characters
                  </p>
                </div>
              </div>
              <div className="info">
                <label>
                  Email address
                  <span className={validateEmail ? "valid" : "hide"}>
                    <ImCheckmark />
                  </span>{" "}
                  <span
                    className={validateEmail || !email ? "hide" : "invalid"}>
                    <FaTimes />
                  </span>
                </label>
                <input
                  ref={userRef}
                  type="email"
                  name="email"
                  value={email}
                  placeholder="example@gmail.com"
                  className="info-input"
                  aria-invalid={validateEmail ? "false" : "true"}
                  aria-describedby="emailnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p
                  id="emailnote"
                  className={
                    emailFocus && email && !validateEmail
                      ? "instructions"
                      : "offscreen"
                  }>
                  8 to 24 characters allowed <br />
                  must include uppercase letters, lowercase letter, numbers and
                  special characters
                </p>
              </div>
              <div className="info">
                <label>
                  Password
                  <span className={validatePwd ? "valid" : "hide"}>
                    <ImCheckmark />
                  </span>
                  <span className={validatePwd || !pwd ? "hide" : "invalid"}>
                    <FaTimes />
                  </span>
                </label>
                <input
                  ref={userRef}
                  type="password"
                  name="password"
                  value={pwd}
                  placeholder="Enter a new password"
                  className="info-input"
                  aria-invalid={validatePwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  onChange={(e) => setPwd(e.target.value)}
                />
                <p
                  id="pwddnote"
                  className={
                    pwdFocus && pwd && !validatePwd
                      ? "instructions"
                      : "offscreen"
                  }>
                  <RiErrorWarningLine />
                  must be 4 to 24 characters <br />
                  letters, numbers, special symbols are allowed.
                </p>
              </div>
              <div className="info">
                <label>
                  Confirm password
                  <span className={validateMatchPwd ? "valid" : "hide"}>
                    <ImCheckmark />
                  </span>
                  <span
                    className={
                      validateMatchPwd || !matchPwd ? "hide" : "invalid"
                    }>
                    <FaTimes />
                  </span>
                </label>
                <input
                  ref={userRef}
                  type="password"
                  name="confirmpassword"
                  value={matchPwd}
                  placeholder="Enter your new password again"
                  className="info-input"
                  aria-invalid={validateMatchPwd ? "false" : "true"}
                  aria-describedby="matchpwdnote"
                  onFocus={() => setMatchPwdFocus(true)}
                  onBlur={() => setMatchPwdFocus(false)}
                  onChange={(e) => setMatchPwd(e.target.value)}
                />
                <p
                  id="matchpwdnote"
                  className={
                    matchPwdFocus && matchPwd && !validateMatchPwd
                      ? "instructions"
                      : "offscreen"
                  }>
                  <RiErrorWarningLine />
                  must be 4 to 24 characters <br />
                  letters, numbers, special symbols are allowed.
                </p>
              </div>
              <button
                className="createacct-btn"
                disabled={
                  !validateName ||
                  !validateLastName ||
                  !validateEmail ||
                  !validatePwd ||
                  !validateMatchPwd
                    ? true
                    : false
                }>
                Create account
              </button>
            </form>
          </section>
        </section>
      )}
    </main>
  );
};

export default SignupPage;
