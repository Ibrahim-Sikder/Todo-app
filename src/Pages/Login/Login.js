import React from 'react';
import { useContext } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useState } from 'react';
const Login = () => {
    const [loginError, setLoginError] = useState('')
    const {login} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
      const handleSubmit = event =>{
          event.preventDefault();
          const form = event.target;
          const  email = form.email.value;
          const password = form.password.value;
  
          login(email, password)
          .then(result=>{
            const user = result.user;
            console.log(user)
            alert('Login successfully')
            form.reset()
            navigate(from, {replace:true})
        })
        .catch(err=>{
            console.log(err)
           
        })
  
      }


    return (
        <div className='w-full md:w-2/5 p-10 m-auto text-center '>
        <h1 className='text-3xl text-[#081C15] my-3 font-bold '>Login now</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input name='email' type="email" className="focus:outline-none border-none p-2 rounded w-full" placeholder="Your Email " />
            </div>
            <div className="mb-3">
                <input name='password' type="password" className="focus:outline-none border-none p-2 rounded w-full" placeholder="Your Password "/>
            </div>
            {/* <p className='text-red-500' role="alert">{loginError.message}</p> */}
            <button type='submit' className='bg-[#081C15] text-white w-full rounded py-2'>Login </button>

            <p className='text-white my-5 text-xl'> Create todo account ! <Link to='/register'> Sign Up </Link></p>
        </form>
    </div>
    );
};

export default Login;