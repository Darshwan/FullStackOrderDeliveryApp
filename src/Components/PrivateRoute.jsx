// import React from 'react'
import { useSelector } from 'react-redux'
import DashBoard from './DashBoard/DashBoard.jsx'
import { Navigate } from 'react-router-dom'

function PrivateRoute() {
  const username = useSelector(state => state.userOfRestaurantApp.currentUserOfRestaurantApp?.username)
  console.log(username);
  
    return (
      username ? <DashBoard /> : <Navigate to='/login' />
  )
}

export default PrivateRoute