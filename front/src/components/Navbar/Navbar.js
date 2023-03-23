import React, { Fragment, memo, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ModalContext } from '../../context/ModalContext'
import { LoginContext } from '../../context/LoginContext'


function Navbar() {

  /* importer isLogged du contexte login */
  const { isLogged, setIsLogged } = useContext(LoginContext);

  const { toggleModal } = useContext(ModalContext)

  const handleSignUp = () => {
    toggleModal("signUp")
  }

  const handleSignIn = () => {
    toggleModal("signIn")
  }

  const handleSignOut = () => {

    localStorage.removeItem("token");
    setIsLogged({
      isLogged: false,
      jwt: ""
    })

  }




  return (
    <Fragment>
    <nav className="navbar navbar-light bg-dark px-4">
      <Link to="/" className="navbar-brand text-light">
        Pokemon
      </Link>

    

    <div>
      { !isLogged.isLogged ? (
        <Fragment>
          <button
            onClick={handleSignUp}
            className="btn btn-primary"
          >
            Sign Up
          </button>

          <button
            onClick={handleSignIn}
            className="btn btn-success ms-2"
          >
            Sign In
          </button>
        </Fragment>
      ) : (
        <button
        onClick={handleSignOut}
        className="btn btn-danger ms-2"
      >

        Sign Out
      </button>
     
      )}
    
    </div>





    </nav>
    </Fragment>
  )
}

export default memo(Navbar)
