import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
const [passwordError, setPasswordError] = useState('')

    const {createUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('Please provide at least tow uppercase')
            return;
        }
        
        if(!/(?=.*[!@#*])/.test(password)){
            setPasswordError('Please at least one special character!')
            return;
        }
        if(password.length < 6 ){
            setPasswordError('Password should be six character!');
            return;
        }
        setPasswordError('')
    
        createUser(email, password )
        .then(result=>{
          const user = result.user;
          console.log(user);
          alert('User create successfuly')
          form.reset()
        })
        .catch((error) => {
            console.log(error)
          });

    }
    return (
        <div className='w-1/4 m-auto text-center mb-10 my-24'>
            <h1 className='text-3xl my-3 font-bold text-white'>Register now</h1>
            <div className='box pb-5'>
          <span className="borderLine"></span>
           <form className='pb-10' onSubmit={handleRegister}>
           <h2>Sign Up</h2>
           <div className="inputBox">
                <input type="text" name='firstName' required />
                <span>User Name</span>
                <i></i>
           </div>
           <div className="inputBox">
                <input type="email" name='email' required />
                <span>Email</span>
                <i></i>
           </div>
           <div className="inputBox">
                <input type="password" name='password' required />
                <span>Password</span>
                <i></i>
           </div>
           <p className='text-white my-3'>{passwordError}</p>
           <div className="links">
                <p href="#">Forgot password</p>
                <p className='text-white' href="#"><Link to='/login'>Login</Link></p>
           </div>
           <input className='' type="submit" placeholder='Register' />
           </form>
        </div>
        </div>
    );
};

export default Register;