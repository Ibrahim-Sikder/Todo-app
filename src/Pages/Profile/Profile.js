import React from 'react';

const Profile = () => {
    return (
        <div className='w-1/4 m-auto text-center'>
            <h1 className='text-3xl my3 font-bold '>Profile </h1>
            <div className="mt-3">
                <h2 className="text-2xl">Name:</h2>
                <h2 className="text-2xl">Email</h2>
                <div className="mt-3">
                    <button className="bg-yellow-600 my-2 text-white w-full py-2 rounded ">Update Profile</button>
                    <button className="bg-blue-600 my-2 text-white w-full py-2 rounded ">Update Password</button>
                    <button className="bg-red-400 my-2 text-white w-full py-2 rounded ">Delete Account</button>
                    <button className="bg-red-700 my-2 text-white w-full py-2 rounded ">LogOut</button>
                </div>
            </div>
            
        </div>
    );
};

export default Profile;