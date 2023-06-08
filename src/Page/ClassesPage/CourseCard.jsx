import React from 'react';

const CourseCard = ({course}) => {
    const {name, image, _id, available_seats , instructor_name, price   } = course
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
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;