import React, {Fragment} from 'react';
import Navbar from './components/Navbar/Navbar';
import SignUpModal from './components/signUpModal/signUpModal';
import SignInModal from './components/signInModal/signInModal';
/* import du hook */
import useAuth from './Hooks/AuthHook';
import useRemove from './Hooks/CloseHook';


function App() {
  const verify= useAuth()

  return (

    <Fragment>
      <Navbar />
      <SignUpModal />
      <SignInModal />
    </Fragment>


  )
}

export default App;
