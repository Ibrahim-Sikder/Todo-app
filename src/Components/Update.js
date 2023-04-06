import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser)

    const handleUpdateUser = event =>{
        event.preventDefault();
        fetch(`https://todo-list-server-nine.vercel.app/users/${storedUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0 ){
                alert('Todo Item successfully !')
            }
            console.log(user)
        })
        
       
      
    }
    const handleInputChange = event =>{
       const value = event.target.value;
       const field = event.target.name;
       const newUser = {...user}
        newUser[field] = value ;
        setUser(newUser);
       
    }
    return (
        <div className='w-full p-5 md:w-2/4 m-auto text-left my-24'>
        <h1 className='text-white text-center   text-2xl bold mb-5'>Please update {storedUser?.title}</h1>
        <form onSubmit={handleUpdateUser}>
            <div className="mb-3">
                <span className='text-left mb-5 text-xl text-white'>Title</span>
                <input defaultValue={storedUser?.title} onChange={handleInputChange} type="text" name='title' placeholder='Title' className="focus:outline-none border-none my-3 p-2 rounded w-full"/>
            </div>
            <span className='text-left mb-5 text-xl text-white'>Description</span>
            <textarea className="focus:outline-none my-3 h-40 resize-none textarea border-none p-2 rounded w-full" defaultValue={storedUser?.description} name='description' onChange={handleInputChange}  placeholder="Description"></textarea>
            <input className='my-3' type="date" name='date' />
            {/* <p className='text-red-500' role="alert">{loginError.message}</p> */}
            <button type='submit' className='bg-[#081C15] text-white w-full rounded py-2'>Update Todo </button>

            <p className='text-white my-5 text-xl'> Create todo account ! <Link to='/register'> Sign Up </Link></p>
        </form>
    </div>
    );
};

export default Update;