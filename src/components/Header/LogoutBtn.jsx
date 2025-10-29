<<<<<<< HEAD
import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout()
        .then(()=> {
            dispatch(logout())
        })
    } 
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick = {logoutHandler}>
        Logout
    </button>
  )
}

=======
import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout()
        .then(()=> {
            dispatch(logout())
        })
    } 
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick = {logoutHandler}>
        Logout
    </button>
  )
}

>>>>>>> 0b42a430be9d6fef8d718d6e162fcd55bf825e56
export default LogoutBtn