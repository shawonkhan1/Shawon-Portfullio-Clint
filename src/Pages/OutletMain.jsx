import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';

const OutletMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default OutletMain;