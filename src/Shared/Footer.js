import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF,FaLinkedinIn,FaGithub,FaProductHunt } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#081c15] text-primary-content">
  <div>
   
    <p className="font-bold">
      MERN Stack Developer <br/>Providing amazing frontend service
    </p> 
    <p>Copyright © 2023 - All right reserved by Ibrahim Sikder</p>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
        <Link className='text-3xl ' to='https://www.linkedin.com/in/ibrahim-sikder33/'><span><FaLinkedinIn/></span></Link>
        <Link className='text-3xl ' to='https://www.facebook.com/ibrahim.sikder5033/'> <span><FaFacebookF/></span></Link>
        <Link className='text-3xl ' to='https://github.com/Ibrahim-Sikder'><span><FaGithub/></span></Link>
        <Link className='text-3xl ' to='https://dashing-belekoy-f4b6d5.netlify.app/'><span><FaProductHunt/></span></Link>
    </div>
  </div>
</footer>
    );
};

export default Footer;