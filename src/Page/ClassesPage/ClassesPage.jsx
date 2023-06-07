import React from 'react';
import UseCourse from '../../hooks/UseCourse';

const ClassesPage = () => {
    const [course] = UseCourse()
    console.log(course);
    return (
        <div>
            
        </div>
    );
};

export default ClassesPage;