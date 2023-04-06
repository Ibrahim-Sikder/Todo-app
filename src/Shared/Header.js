import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
  const {logOut,user} = useContext(AuthContext)
  const handleLogout= () =>{
    logOut()
    .then()
    .catch()
    
  }

    const menuItems = <React.Fragment>
        <li><Link to='/' href="#">View Todo</Link></li>
        <li><Link to='/adduser' href="#">Add Todo Item</Link></li>
        {
          user?.email ? 
          <button onClick={handleLogout}><li>Sign Out</li></button>
         
          :
          <li><Link to='/login' href="#">Login</Link></li>
        }
    </React.Fragment>
    return (
        <div>
            <div className="navbar bg-[#081c15] text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#081c15] rounded-box w-52">
        {menuItems}
       
      </ul>
    </div>
    <Link to='https://dashing-belekoy-f4b6d5.netlify.app/' className="btn btn-ghost normal-case text-3xl bold">Ibrahim Sikder</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="text-[#12B27C] text-3xl"></a>
  </div>
</div>
        </div>
    );
};

export default Header;