import { useEffect, useContext } from "react";
import { LoginContext } from "../context/LoginContext";





/* hook qui verifie la presence d'un token dans le localStorage */
const useAuth = () => {
    const { setIsLogged } = useContext(LoginContext);
   
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) {
            setIsLogged({
                isLogged: true,
                jwt: token
            })
        }
    }, [])
}

export default useAuth;


