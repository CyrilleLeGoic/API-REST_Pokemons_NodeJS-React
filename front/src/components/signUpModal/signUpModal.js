import React, { Fragment, useContext, useRef, useState } from "react";

import { ModalContext } from "../../context/ModalContext";

import { signUp } from "../../service/userServices/userService";

export default function SignUpModal() {

  const [validationMessage, setValidationMessage] = useState("");


  const { toggleModal, modalState } = useContext(ModalContext);

  /* fermer la modal */
  const closeModal = () => {
    toggleModal("close");
  };

  const inputs = useRef([]);

  const addInput = (input) => {
    if (input && !inputs.current.includes(input)) {
      inputs.current.push(input);
    }
  };

  const formRef = useRef();

  const handleSubmit = async (e) => {

    e.preventDefault();

    /* si le nom est vide */
    if (inputs.current[0].value.length === 0) {
      setValidationMessage("Le nom est obligatoire");
      return;
    }

    /* si le prenom est vide */
    if (inputs.current[1].value.length === 0) {
      setValidationMessage("Le prenom est obligatoire");
      return;
    }
    /* si l'email est vide */
    if (inputs.current[2].value.length === 0) {
      setValidationMessage("L'email est obligatoire");
      return;
    }

    /* si le password est vide */
    if (inputs.current[3].value.length < 6) {
      setValidationMessage("6 caractère minimum");
      return;
    }
    /* si password et repeat password ne sont pas identiques */
    if (inputs.current[3].value !== formRef.current[4].value) {
      setValidationMessage("Les mots de passe doivent être identiques");
      return;
    }

    try {
      const user = {
        nom: inputs.current[0].value.trim(),
        prenom: inputs.current[1].value.trim(),
        email: inputs.current[2].value.trim(),
        password: inputs.current[3].value.trim(),
      };

      

      const response = await signUp(user);
      if(response) {
        closeModal();
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div className="w-100 h-100 bg-dark bg-opacity-75"></div>
          <div
            className="position-absolute top-50 start-50 translate-middle bg-white p-3 rounded"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header mb-3">
                  <h5 className="modal-title fs-2 fw-bold text-secondary">
                    Sign Up
                  </h5>
                  <button
                    className="btn-close p-2"
                    onClick={closeModal}
                  ></button>
                </div>

                <div className="modal-body">
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="sign-up-form"
                  >
                    <div className="mb-3">
                      <label
                        className="form-label fw-bold text-primary"
                        htmlFor="signUpNom"
                      >
                        Nom
                      </label>
                      <input
                        ref={addInput}
                        type="nom"
                        name="nom"
                        required
                        className="form-control"
                        id="signUpNom"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        className="form-label fw-bold text-primary"
                        htmlFor="signUpPrenom"
                      >
                        Prénom
                      </label>
                      <input
                        ref={addInput}
                        type="prenom"
                        name="prenom"
                        required
                        className="form-control"
                        id="signUpPrenom"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        className="form-label fw-bold text-primary"
                        htmlFor="signUpEmail"
                      >
                        Email address
                      </label>
                      <input
                        ref={addInput}
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        className="form-label fw-bold text-primary"
                        htmlFor="signUpPwd"
                      >
                        Password
                      </label>
                      <input
                        ref={addInput}
                        type="password"
                        name="pwd"
                        required
                        className="form-control"
                        id="signUpPwd"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        className="form-label fw-bold text-primary"
                        htmlFor="repeatPwd"
                      >
                        Confirm password
                      </label>
                      <input
                        type="password"
                        name="pwd"
                        required
                        className="form-control"
                        id="repeatPwd"
                      />

                      <p className="text-danger mt-3">{validationMessage}</p>
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
