import React from "react";

export default function SignIn() {
  return (
    <>
      <section className="sign-in mx-auto">
        <div className="row">
          <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
            <form action="">
              <div className="container mx-auto">
                <div className="pb-50">
                  <a className="navbar-brand" href="../index.html">
                    <img src="/icon/logo.png" className="img-fluid" alt="" />
                  </a>
                </div>
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">
                  Sign In
                </h2>
                <p className="text-lg color-palette-1 m-0">
                  Masuk untuk melakukan proses top up
                </p>
                <div className="pt-50">
                  <label
                    htmlFor="email"
                    className="htmlForm-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-pill text-lg"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="pt-30">
                  <label
                    htmlFor="password"
                    className="htmlForm-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-pill text-lg"
                    id="password"
                    name="password"
                    aria-describedby="password"
                    placeholder="Your password"
                  />
                </div>
                <div className="button-group d-flex flex-column mx-auto pt-50">
                  <a
                    className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                    href="../index.html"
                    role="button"
                  >
                    Continue to Sign In
                  </a>

                  <a
                    className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                    href="../src/sign-up.html"
                    role="button"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div className="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
            <img
              src="/img/Header-9.png"
              width="502"
              height="391.21"
              className="img-fluid pb-50"
              alt=""
            />
            <h2 className="text-4xl fw-bold text-white mb-30">
              Win the battle.
              <br />
              Be the Champion.
            </h2>
            <p className="text-white m-0">
              Kami menyediakan jutaan cara untuk
              <br /> membantu players menjadi
              <br />
              pemenang sejati
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
