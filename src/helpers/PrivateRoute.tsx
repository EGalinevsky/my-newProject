import React from 'react'
import { useAuthContext } from './contexts/AuthContext'
import { Route, Navigate } from "react-router-dom"



const PrivateRoute = ({children}:any) => {
    const { currentUser } = useAuthContext()
    if (!currentUser) {
        return <Navigate to="/login" replace />;
      }
    
      return children;
}

export default PrivateRoute


