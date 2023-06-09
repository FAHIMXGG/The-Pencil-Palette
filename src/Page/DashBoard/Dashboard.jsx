import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHamburger, FaShoppingCart } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">

                        <li><Link to="/">Home</Link></li>

                        <li><Link to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> Cart</Link></li>
                        <li><Link to="/dashboard/add">Add</Link></li>
                        <div className='divider'></div>

                        <li><Link to= "/">h</Link></li>
                        <li><Link to= "/">h</Link></li>
                        <li><Link to= "/">h</Link></li>
                        <li><Link to= "/">h</Link></li>
                    </ul>

                </div>
            </div>
            


        </div>
    );
};

export default Dashboard;