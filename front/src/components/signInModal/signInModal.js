import React, { Fragment, useContext, useRef, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { signIn } from "../../service/userServices/userService";
import { LoginContext } from "../../context/LoginContext";




export default function SignInModal() {

   /* importer le contexte login */
   const { handleLogin, isLogged, setIsLogged  } = useContext(LoginContext);

  //* Modal *//

  const { modalState, toggleModal } = useContext(ModalContext);

  const inputs = useRef([]);

  const addInput = (input) => {
    if (input && !inputs.current.includes(input)) {
      inputs.current.push(input);
    }
  };

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = {
        email: inputs.current[0].value.trim(),
        password: inputs.current[1].value.trim()

      };

      const response = await signIn(user);
      if(response) {
        setIsLogged({
          isLogged: true,
          jwt: response.token
        })

        /* enregit=strer le token dans le local storage */
        localStorage.setItem("token", response.token);
        closeModal();
      }

    } catch (error) {
      console.log(error);
    } 
  }

  const closeModal = () => {
    toggleModal("close");
  };



  return (
    <Fragment>
      {modalState.signInModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            className="w-100 h-100 bg-dark bg-opacity-75"
            onClick={closeModal}
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle bg-white p-3 rounded"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header mb-3">
                  <h5 className="modal-title fs-2 fw-bold text-secondary">
                    Sign In
                  </h5>
                  <button
                    className="btn-close p-2"
                    onClick={closeModal}
                  ></button>
                </div>

                <div className="modal-body">
                  <form
                    onSubmit={handleSubmit}
                    ref={formRef}
                    className="sign-up-form"
                  >
                    <div className="mb-3">
                      <label
                        className="form-label fw-bold text-primary"
                        htmlFor="signInEmail"
                      >
                        Email address
                      </label>
                      <input
                        ref = {addInput}
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        id="signInEmail"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        className="form-label fw-bold text-primary"
                        htmlFor="signInPwd"
                      >
                        Password
                      </label>
                      <input
                        ref = {addInput}
                        type="password"
                        name="password"
                        required
                        className="form-control"
                        id="signInPwd"
                      />

                      <p className="text-danger"></p>
                    </div>

                    <button className="btn btn-primary w-100 fw-bold mt-4 mb-4">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
