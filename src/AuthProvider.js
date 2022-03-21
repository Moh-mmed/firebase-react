import { useEffect, createContext, useState } from "react";
import { auth } from "./firebase-config";
import {onAuthStateChanged} from 'firebase/auth'
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [username, setUsername] = useState("");
    const [pending, setPending] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setUsername(user.displayName)
            setPending(false)
        })
    }, [])
    if (pending) {
        return <div></div>
    }
    return (
        <AuthContext.Provider value={{currentUser, username, setUsername}}>
            {children}
        </AuthContext.Provider>
    )
}