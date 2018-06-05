import React from 'react'

import './style.css'

const Home = props => {
  return (
    <div>
      <div className='header-flex-container'>
        <div className='header-name'>
          <p className='header-logo' onClick={() => props.goToHome()}>Newsworm</p>
        </div>
        <div className='signup-login'>
          <button className='header-signup' onClick={() => props.goToSignUp()}>Sign Up</button>
          <button className='header-login' onClick={() => props.goToLogIn()}>Log In</button>
        </div>
      </div>
      <div className='body-flex-container'>heyyyyyyyyyyyyyyyyyy</div>
    </div>

  )
}

export default Home
