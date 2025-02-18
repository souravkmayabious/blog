import React from 'react'
import { Link } from 'react-router-dom'

export default function Forgot() {
  return (
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 mb-3">@norven</h1>
        <p class="col-lg-10 fs-4">CodePen Platform, Always Free! 🙌</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Forgot
          </button>
          <hr class="my-4" />
          <small class="text-muted">
              <p className="m-0 p-0 mt-2"><Link to={'/login'}>Back to ? Login</Link></p>
          </small>
        </form>
      </div>
    </div>
  </div>
  )
}
