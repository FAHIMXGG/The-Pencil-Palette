import { useQuery } from '@tanstack/react-query';
//import React, { useEffect, useState } from 'react';

const UseCourse = () => {
    // const [course, setCourse] = useState([]);
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/course')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCourse(data);
    //             setLoading(false);
    //         })
    // }, [])
    // return [course, loading]


    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/course');
            return res.json();
        }
    })
    return [menu, loading, refetch]
};

export default UseCourse;