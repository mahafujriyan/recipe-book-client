import React from 'react';
import { Link } from 'react-router';
import Navbar from '../Components/Header/Navbar';

const ErrorPage = () => {
    return (

        <div className=' my-5 w-11/12 mx-auto space-y-3 '>
            <> 
            <Navbar></Navbar>
            </>
            <img src="/assets/404.gif" alt="" />
            <button className=' flex justify-center btn btn-secondary p-2'><Link to='/'  >Back to Home</Link></button>

        </div>
    );
};

export default ErrorPage;