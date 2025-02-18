import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.warning("All fields are required");
      return;
    }
    //console.log(name, email, password);
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/signup",
        {
          name,
          email,
          password,
        }
      );
      if (response.data.success) {
        toast.success("Registration successful");
      } else {
        toast.error(response.data.message || "Registration failed");
      }
    } catch (error) {
      toast.error("Error in signup : " + error);
    }
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">@VibeNest</h1>
          <p className="col-lg-10 fs-4">This Platform, Always Free! 🙌</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light" autoComplete="off">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                id="floatingInput2"
                placeholder="Your name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="floatingInput2">User name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              onClick={handleSignup}
            >
              Signup
            </button>
            <hr className="my-4" />
            <small className="text-muted">
              <center>
                Every user who becomes a member accepts the <i>terms</i>{" "}
                agreement.
              </center>
              <p className="m-0 p-0 mt-2">
                <Link to={"/login"}>Back to ? Login</Link>
              </p>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
