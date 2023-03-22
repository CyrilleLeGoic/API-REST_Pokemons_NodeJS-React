// import de l'instance axios
import instance from '../instance/instance';

// export de la fonction qui va faire la requête

export const signUp = async (user) => {
    try {
        const response = await instance.post('/signup', user);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const signIn = async (user) => {
    try {
        const response = await instance.post('/login', user);
        console.log(response.data)
        return response.data;
        
    } catch (error) {
        console.log(error);
    }
}
