import React, { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { useEffect } from 'react';
import app from '../firebase/firebase.init';


const OauthContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //google sign in
  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  //facebook login

  const facebookLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  //email registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // singin with password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }


  // update profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  }


  // verify email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }


  // sign out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    }

  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    googleLogin,
    facebookLogin,
    logOut,
    updateUserProfile,
    verifyEmail,
    createUser,
    signIn
  };


  return (
    <OauthContext.Provider value={authInfo}>
      {children}
    </OauthContext.Provider>
  )
}
export const AuthState = () => {
  return useContext(OauthContext);
}
export default AuthContext
