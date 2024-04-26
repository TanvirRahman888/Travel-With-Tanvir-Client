import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/Firebase.Confing";
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null) 
    const auth = getAuth(app);

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

const authInfo={
    user,
    createUser,
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;