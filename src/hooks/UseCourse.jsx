import React, { useEffect, useState } from 'react';

const UseCourse = () => {
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => {
                setCourse(data);
                setLoading(false);
            })
    }, [])
    return [course, loading]
};

export default UseCourse;