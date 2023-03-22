import React, { createContext, useEffect, useState} from 'react';


export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false,
      });

    const toggleModal = (modal) => {
        if (modal === "signIn") {
         setModalState({
            signUpModal: false,
            signInModal: true
            })
        } 
        
        if (modal === "signUp") {
            setModalState({
                signUpModal: true,
                signInModal: false
            })
        }

        if (modal === "close") {
            setModalState({
                signUpModal: false,
                signInModal: false
            })
        }
    }


    return (
        <ModalContext.Provider value = {{ modalState, toggleModal }}>
            {children}
        </ModalContext.Provider>
    )
}

