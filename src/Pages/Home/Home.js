import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaTrashAlt,FaRegEdit } from "react-icons/fa";

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users)

    const handleDelete = user =>{
        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`)
        if(agree){
           
            fetch(`https://todo-list-server-nine.vercel.app/users/${user._id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0 ){
                    alert('User deleted successfully.');
                    const remainingUsers = displayUsers.filter(usr =>usr._id !== user._id);
                    setDisplayUsers(remainingUsers)
                }
            })
        }
        
    }
    return (
        <div>
            <h1 className='text-white text-3xl my-5'>View all todo item {displayUsers.length}</h1>
            <div>
                {
                    displayUsers.map(user=><p
                    key={user._id}>
                        <div className='bg-[#081c15] text-white md:w-6/12 :w-full py-5 px-3  mx-auto mt-5 rounded'>
                        <h2 className='text-3xl mb-3'>{user.title} </h2> 
                        <p className='mb-5'>{user.description}</p>
                        <span className='text-left'>{user.date}</span>
                        <div className='mt-3'>
                        <button className='mr-5 text-red-600 text-xl' onClick={()=>handleDelete(user)}><FaTrashAlt/></button>
                            <Link to={`/update/${user._id}`}>
                            <button className='text-[#2990EB] text-xl bold'><FaRegEdit/></button>
                        </Link>
                       </div>
                        </div><br />
                       
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;