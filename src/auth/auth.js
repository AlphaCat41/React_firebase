import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_config";

export const createUser = async (email, password) =>{
    return await createUserWithEmailAndPassword(auth, email, password)  
}

export const signin = async (email, password) =>{
    return  await signInWithEmailAndPassword(auth, email, password)
}