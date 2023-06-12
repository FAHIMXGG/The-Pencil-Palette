import React from 'react';
import UseCourse from '../../hooks/UseCourse';
import CourseCard from '../../Page/ClassesPage/CourseCard';

const PopularClass = () => {
    const [ courses, , refetch ] = UseCourse()
    

    const byClass = [...courses].sort((a, b) => b.students
    - a.students
    );

    console.log(byClass)
    return (
        <div>
            <h1 className='text-center mt-10  text-4xl font-bold mb-10'>Popular Classes</h1>

            <div className='justify-items-center grid grid-cols-3 gap-10'>
                {
                    byClass.slice(0, 6).map(course => <CourseCard
                        key={course._id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
            
        </div>
    );
};

export default PopularClass;