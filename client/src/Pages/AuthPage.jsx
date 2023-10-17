import React from 'react'
import { useRecoilValue } from 'recoil'
import Signup from '../component/Signup'
import Login from '../component/Login'
import { authScreenAtom } from '../atoms/authAtoms'


const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  console.log(authScreenState);
  return ( 
    <>
   {authScreenState === "login" ? <Login/> : <Signup/> }
  </>
  )
}

export default AuthPage