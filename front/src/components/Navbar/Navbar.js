import React, { Fragment, memo, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ModalContext } from '../../context/ModalContext'

function Navbar() {

  const { toggleModal } = useContext(ModalContext)

  const handleSignUp = () => {
    toggleModal("signUp")
  }

  const handleSignIn = () => {
    toggleModal("signIn")
  }



  return (
    <Fragment>
    <nav className="navbar navbar-light bg-dark px-4">
      <Link to="/" className="navbar-brand text-light">
        Pokemon
      </Link>

      <div>
        <button 
        onClick={handleSignUp}
        className="btn btn-primary">
          Sign Up
        </button>

        <button 
        onClick={handleSignIn}
        className="btn btn-success ms-2">
          Sign In
        </button>

        <button 
        className="btn btn-danger ms-2">
          Sign Out
        </button>
      </div>
    </nav>
    </Fragment>
  )
}

export default memo(Navbar)
