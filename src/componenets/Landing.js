import React from 'react';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

export default function Landing(props) {
  return (
    <div className="container-fluid">
      <div
        className="row flex-column flex-lg-row justify-content-evenly align-items-center"
        style={{ backgroundColor: 'var(--my-white)' }}
      >
        <div className="col col-lg-4">
          <img
            className="img-fluid my-5 mx-10"
            src="logo.svg"
            alt="landing-logo"
          />
        </div>
        <div className="col col-lg-5">
          <h2
            className="display-3 text-lg-left text-center mb-3 mb-lg-5"
            style={{ fontFamily: 'var(--header-font)' }}
          >
            Just One More Movie Please!
          </h2>
          <div className="row justify-content-center align-items-center">
            <div className="col col-sm-10 col-md-8 col-lg-6">
              <div className="btn-group d-flex justify-content-center text-center">
                <button
                  className="btn btn-lg mx-1 w-50 fw-bold border rounded-1"
                  id="loginBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login
                </button>
                <button
                  className="btn btn-lg mx-1 w-50 fw-bold border rounded-1"
                  id="signupBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal
        modalId="loginModal"
        loginCallback={props.loginCallback}
        loginVerifier={props.loginVerifier}
        isLoggedIn={props.isLoggedIn}
      />
      <SignUpModal modalId="signupModal" />
    </div>
  );
}
