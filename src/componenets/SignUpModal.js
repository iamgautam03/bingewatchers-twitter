import React, { useState } from 'react';
import auth from '../apis/auth';

const firebaseErros = {
  'Firebase: Error (auth/email-already-in-use).':
    'Email Already Exists, please use different email or login.',
};

export default function SignUpModal(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetFields = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const singupVerifier = async () => {
    auth
      .signup(name, email, password)
      .then(async (res) => {
        window.showSnackbar('Signed Up Successfully', 'alert-success');
        document.querySelector('#signupModal .modal-auth-close-btn').click();
        resetFields();
      })
      .catch((err) => {
        console.log(err.message);
        window.showSnackbar(
          firebaseErros[err.message] ||
            "Something wen't wrong please try again.",
          'alert-danger'
        );
      });
  };

  const handleOnChage = (ev) => {
    let inputFieldName = ev.currentTarget.name;
    let value = ev.currentTarget.value;
    if (inputFieldName === 'name') setName(value);
    if (inputFieldName === 'email') setEmail(value);
    if (inputFieldName === 'password') setPassword(value);
  };

  return (
    <div
      className="modal fade"
      id={props.modalId}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              SignUp
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form id="signupForm">
              <div className="mb-3">
                <label htmlFor="signupName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleOnChage}
                  className="form-control"
                  id="signupName"
                  value={name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signupEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleOnChage}
                  className="form-control"
                  id="signupEmail"
                  value={email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signupPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleOnChage}
                  className="form-control"
                  id="signupPassword"
                  value={password}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn modal-auth-btn"
              form="signupFrom"
              onClick={singupVerifier}
            >
              SignUp
            </button>
            <button
              type="button"
              className="btn modal-auth-close-btn"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
