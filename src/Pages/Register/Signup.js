import React from 'react';
import './Signup.css'

const Signup = () => {
    return (
        <div className='box mb-24'>
          <span className="borderLine"></span>
           <form>
           <h2>Sign Up</h2>
           <div className="inputBox">
                <input type="text" required />
                <span>User Name</span>
                <i></i>
           </div>
           <div className="inputBox">
                <input type="password" required />
                <span>Password</span>
                <i></i>
           </div>
           <div className="links">
                <a href="#">Forgot password</a>
                <a href="#">Sign Up</a>
           </div>
           <input type="submit" value='Login' />
           </form>
        </div>
    );
};

export default Signup;