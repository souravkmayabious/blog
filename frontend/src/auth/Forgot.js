import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Forgot() {
    const [email, setEmail] = useState('');

    const handleForgot = async (e) => {
      e.preventDefault();
      if( !email) {
        toast.warning('Email is required');
        return;
      }
      try{
        const response = await axios.post(process.env.REACT_APP_API_URL+'/signup', {
          email
        });
        if (response.data.success) {
          toast.success('Reset successful');
        } else {
          toast.error(response.data.message || 'Fail to reset password');
        }
      }catch(error){
        toast.error('Error in reset : '+ error);
      }
    }
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
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleForgot}>
            Forgot
          </button>
          <hr className="my-4" />
          <small className="text-muted">
              <p className="m-0 p-0 mt-2"><Link to={'/login'}>Back to ? Login</Link></p>
          </small>
        </form>
      </div>
    </div>
  </div>
  )
}
