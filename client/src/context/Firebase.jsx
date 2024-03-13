import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, set, ref, get } from "firebase/database";
import { app } from "../config/firebase";
const FirebaseContext = createContext();

const auth = getAuth(app);
const db = getDatabase(app);

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const register = async ({ name, address, email, password }) => {
    try {
      const resp = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = resp;
      await writeUserData({
        userId: user.uid,
        name,
        email,
        address,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async ({ email, password }) => {
    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };
  const writeUserData = async ({ userId, name, email, address }) => {
    return set(ref(db, "users/" + userId), {
      username: name,
      email: email,
      address: address,
    });
  };
  const sensorData = async () => {
    const data = await get(ref(db, "test"));
    return data.val();
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <FirebaseContext.Provider value={{ register, login, sensorData, user }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
export const useFirebase = () => useContext(FirebaseContext);
