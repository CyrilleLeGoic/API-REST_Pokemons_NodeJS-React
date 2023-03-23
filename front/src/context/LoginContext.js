import React, { createContext, useState} from 'react';



export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState({
        isLogged: false,
        jwt: ""
      });
      console.log(isLogged)

    const handleLogin = (login) => {
        if(isLogged) {
            setIsLogged({
                isLogged: true,
                jwt: ""
            })
        }
    }



    return (
        <LoginContext.Provider value = {{ handleLogin, isLogged, setIsLogged   }}>
            {children}
        </LoginContext.Provider>
    )
}