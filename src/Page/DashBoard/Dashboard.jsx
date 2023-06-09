import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHamburger, FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart()
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

                        <li><NavLink to="/">Home</NavLink></li>

                        <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>Cart +{cart?.length}</NavLink></li>
                        <li><NavLink to="/dashboard/add">Add</NavLink></li>
                        <div className='divider'></div>

                        <li><NavLink to= "/">h</NavLink></li>
                        <li><NavLink to= "/">h</NavLink></li>
                        <li><NavLink to= "/">h</NavLink></li>
                        <li><NavLink to= "/">h</NavLink></li>
                    </ul>

                </div>
            </div>
            


        </div>
    );
};

export default Dashboard;