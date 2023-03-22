import React, {Fragment} from 'react';
import Navbar from './components/Navbar/Navbar';
import SignUpModal from './components/signUpModal/signUpModal';
import SignInModal from './components/signInModal/signInModal';

function App() {
  return (

    <Fragment>
      <Navbar />
      <SignUpModal />
      <SignInModal />
    </Fragment>


  )
}

export default App;
