import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddUsers = () => {
    const [user, setUser] = useState({})
    const handleAddUser = event =>{
        event.preventDefault();
        console.log(user)
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
    .then(res=>res.json())
    .then(data => {
        if(data.acknowledged){
            alert('Todo Item successfully !')
            event.target.reset();
            
        }
    })
      
    }
    const handleInputBlur = event =>{
       const value = event.target.value;
       const field = event.target.name;
       const newUser = {...user}
        newUser[field] = value ;
        setUser(newUser);
       
    }
    return (
        <div>
        <div className='w-full md:w-2/4 p-5 m-auto text-left my-24'>
       
        <form onSubmit={handleAddUser}>
            <div className="mb-3">
                <span className='text-left mb-5 text-xl text-white'>Title</span>
                <input   onChange={handleInputBlur} type="text" name='title' placeholder='Title' className="focus:outline-none border-none my-3 p-2 rounded w-full"/>
            </div>
            <span className='text-left mb-5 text-xl text-white'>Description</span>
            <textarea onChange={handleInputBlur}  placeholder="Description" className="focus:outline-none textarea my-3 h-40 resize-none textarea border-none p-2 rounded w-full"  name='description' ></textarea>
            <input className='mb-5' onChange={handleInputBlur} name='date' type="date" id="birthday"></input>
            <button type='submit' className='bg-[#081C15] text-white w-full rounded py-2'>Add Todo Items </button>

            
        </form>
    </div>
        </div>
    );
};

export default AddUsers;