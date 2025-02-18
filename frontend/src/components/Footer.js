import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" border-top my-1 py-1 px-2">
      <p className="text-center">© 2025 VibeNest </p>
      <footer className="d-flex flex-wrap justify-content-between align-items-center ">
        <p className="col-md-4 mb-0 text-muted">
            <i className="fa-brands fa-facebook-f footer-social-icon text-primary"></i> &nbsp; &nbsp;
            <i className="fa-brands fa-x-twitter footer-social-icon text-dark"></i> &nbsp; &nbsp;
            <i className="fa-brands fa-instagram footer-social-icon text-secondary"></i> &nbsp; &nbsp;
            <i className="fa-brands fa-youtube footer-social-icon text-danger"></i> &nbsp; &nbsp;
            <i className="fa-brands fa-linkedin-in footer-social-icon  text-info" ></i> &nbsp; &nbsp;
            <i className="fa-brands fa-github footer-social-icon text-warning"></i> &nbsp; &nbsp;
        </p>
        <Link
          to="#"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          ❤
          {/* <img
            src="https://img.icons8.com/ios/2x/t-key.png"
            alt="footer-img"
            width="30"
          /> */}
        </Link>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Terms
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Policy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Help
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Contact
            </Link>
          </li>
        </ul>
      </footer>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-3 shadow">
            <div className="modal-body p-4 text-center">
              <h5 className="mb-0">Are u feeling good?</h5>
              <p className="mb-0">Codepen: @norven.</p>
            </div>
            <div className="modal-footer flex-nowrap p-0">
              <button
                type="button"
                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end"
              >
                <strong>I like this</strong>
              </button>
              <button
                type="button"
                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0"
                data-bs-dismiss="modal"
              >
                No thanks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
