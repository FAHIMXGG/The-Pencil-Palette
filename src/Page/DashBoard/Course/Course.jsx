import React from 'react';
import UseCourse from '../../../hooks/UseCourse';
import CourseTable from './CourseTable';
import { Link } from 'react-router-dom';

const Course = () => {
    const [courses] = UseCourse()
    console.log(courses);
    return (
        <div className="w-full">
            <Link to='/dashboard/add'><button className='btn'>Add</button></Link>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, index) => <tr key={course._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{course.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {course.category}
                                </td>
                                <td className="text-right">${course.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(course)} className="btn btn-ghost bg-red-600  text-white">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>



            {/* <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        courses.map(course => <CourseTable
                            key={course._id}
                            course={course}
                        ></CourseTable>)
                    }
                    </tbody>
                </table>
            </div> */}

        </div>
    );
};

export default Course;