import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const CourseCard = ({course}) => {
    const {name, image, _id, available_seats , instructor_name, price   } = course
    const {user} =useContext(AuthContext)
    
    const navigate = useNavigate()
    const location = useLocation()
    const [ , refetch] = useCart()
    const handleAddToCart = course => {
        
        if(user && user.email){
            const orderItem = {courseItemId: _id, name, image, price, available_seats , instructor_name, email: user.email}
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{instructor_name}</p>
                    <p>{available_seats}</p>
                    <div className="card-actions justify-end">
                        <p>Fee: {price}$</p>
                        <button onClick={() => handleAddToCart(course)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;