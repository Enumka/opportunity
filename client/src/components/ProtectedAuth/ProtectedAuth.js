import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

export  const ProtectedAuth = ({ children }) => {
  let location = useLocation()
if(true) {
  return <Navigate to="/login" state={{from: location}} replace />
}
return children
}

