import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({isLoggedIn,childern}) => {
  if(!isLoggedIn){
    return <Navigate to='/login' replace />
  }
  return childern;
}

export default ProtectedRoute
