import { useEffect, useContext } from "react";
import { LoginContext } from "../context/LoginContext";


/* hook qui verifie la presence d'un token dans le localStorage */
const useRemove = () => {
   // supprimer le token du localStorage
    localStorage.removeItem("token");
}

export default useRemove;


