import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>dashboard</h1>
            <Link to="/dashboard/courseManage"><button className='btn'>course edit</button></Link>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Dashboard;