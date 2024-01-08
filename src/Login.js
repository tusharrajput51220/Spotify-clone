import React from 'react'
import './Login.css'
import { loginUri } from './Spotify'

function Login() {
  return (
    <div className='login'>
      {/* Spotify logo */}
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
      {/* Login spotify button */}
      <a href={loginUri}>Login spotify button</a>
    </div>
  )
}

export default Login