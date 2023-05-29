import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { firebaseApp, firebaseFirestore } from "../../Firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);

  //update existing user
  const updateUser = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //login via third party providers
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //login via user email
  const loginUserEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //create user using email
  const createNewUserEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log user out
  const logout = () => {
    setLoading(true);
    signOut(auth);
  };

  //keeps the states updated upon change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // fetch user data from backend
      const fetchUserFromDb = async (loggedInUser) => {
        setLoading(true);
        if (loggedInUser) {
          try {
            const ref = doc(
              firebaseFirestore,
              "usersCollection",
              loggedInUser?.uid
            );
            const docSnap = await getDoc(ref);
            if (docSnap.exists()) {
              const newUser = docSnap.data();
              setUserType(newUser?.user_type);
              setDbUser(newUser);
            }
            //bypassing user
            else {
              setUserType("Admin");
              setDbUser(user);
              console.log("No such doCUMent!");
            }
          } catch (error) {
            console.error("Error fetching doCUMent!", error);
          }
        }
      };
      fetchUserFromDb(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  //exports
  const authInfo = {
    user,
    dbUser,
    userType,
    setUser,
    updateUser,
    createNewUserEmail,
    loginUserEmail,
    providerLogin,
    logout,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
