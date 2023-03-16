import React from 'react'
import login from '../assets/login.svg'
const SignIn = () => {
  return (
    <div className='signInCard'>
        <div className=''>
            <img src={login} alt="Login svg" className=' h-[300px]'/>
        </div>
        <div className='w-[400px] flex flex-col gap-5'>
            <h1 className=' text-2xl font-bold'>Sign In</h1>
            <div className='input-container'>
            <label htmlFor="name" className='label'>Name</label>
            <input type="text" id='name' placeholder='Wai Linn Aung' className='input'/>
            </div>
            <div className='input-container'>
            <label htmlFor="email" className='label'>Email</label>
            <input type="email" id='email' placeholder='example@gmail.com' className='input'/>
            </div>
            <div className='input-container'>
            <label htmlFor="password" className='label'>Password</label>
            <input type="password" id='password' placeholder='random words' className='input'/>
            </div>
            <button className='btn'>SignIn</button>
        </div>
        
    </div>
  )
}

export default SignIn