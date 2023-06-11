import React from 'react';
import UseCourse from '../../hooks/UseCourse';
import CourseCard from './CourseCard';

const ClassesPage = () => {
    const [courses] = UseCourse()
    //console.log(courses);
    return (
        <div>
            <div className='grid grid-cols-3'>
                {
                    courses.map(course => <CourseCard
                        key={course._id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;