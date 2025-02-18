import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="featured-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <p className="text-muted">
                <span
                  className="typewrite d-inline"
                  data-period="2000"
                  data-type='[ " Travel Blogger. ", "Content Writter. ", "Food Guides " ]'
                ></span>
              </p>
              <h2 className="typed-out">
                Hello, I’m
                <span> Sourav</span>
              </h2>
              <h3 className="mb-20"> Welcome to my blog</h3>
              <h5 className="text-muted">
                Don't miss out on the latest news about Technology, food, Hotels
                review, Food guide...
              </h5>
              <form className="input-group form-subcriber mt-5 d-flex">
                <input
                  type="email"
                  className="form-control bg-white font-small"
                  placeholder="Enter your email"
                />
                <button className="btn bg-primary text-white" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="col-lg-6 text-right d-none d-lg-block">
              <img
                src="/assets/images/blogHead.png"
                height={400}
                width={600}
                alt="aaa"
              />
            </div>
          </div>
        </div>
      </div>

      <p className="text-center" style={{ fontFamily: "Playwrite NZ Guides" }}>
        This is a sample home page. It uses the layout component to render the
        navbar and other common components.
      </p>
    </div>
  );
}
