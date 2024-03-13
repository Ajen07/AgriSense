import React from "react";
import { Navigate } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";

const ProtectedLayout = ({ children }) => {
  const { user } = useFirebase();
  console.log(user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedLayout;
