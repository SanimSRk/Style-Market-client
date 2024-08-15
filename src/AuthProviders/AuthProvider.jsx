import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.init';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const handileClickSignUp = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handileClickUpdateProfile = (fullName, image) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: image,
    });
  };
  const handileClickLogin = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handileClickLogout = () => {
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe;
  }, []);
  const authInfo = {
    handileClickSignUp,
    handileClickLogin,
    handileClickLogout,
    handileClickUpdateProfile,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
