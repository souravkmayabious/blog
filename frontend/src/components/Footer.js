import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-1 px-2 my-1 border-top">
        <p class="col-md-4 mb-0 text-muted">© 2023 Codepen</p>

        <Link
          href="#"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img
            src="https://img.icons8.com/ios/2x/t-key.png"
            alt="footer-img"
            width="30"
          />
        </Link>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <Link href="#" class="nav-link px-2 text-muted">
              Terms
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link px-2 text-muted">
              Policy
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link px-2 text-muted">
              Help
            </Link>
          </li>
          <li class="nav-item">
            <Link href="#" class="nav-link px-2 text-muted">
              Contact
            </Link>
          </li>
        </ul>
      </footer>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-3 shadow">
            <div class="modal-body p-4 text-center">
              <h5 class="mb-0">Are u feeling good?</h5>
              <p class="mb-0">Codepen: @norven.</p>
            </div>
            <div class="modal-footer flex-nowrap p-0">
              <button
                type="button"
                class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end"
              >
                <strong>I like this</strong>
              </button>
              <button
                type="button"
                class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0"
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
