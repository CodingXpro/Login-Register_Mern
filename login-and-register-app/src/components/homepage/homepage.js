
// import React, { useState } from 'react'
import { set } from 'mongoose';
import './homepage.css';

const Homepage = ({ setUserLogin }) => {


    return (
        <div className='homepage'>

            <h1>Hello Homepage </h1>
            <div className='button' onClick={() => setUserLogin({})}>Logout</div>
        </div>
    )
}

export default Homepage
