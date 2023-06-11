import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useInstructors = () => {
    const {data: instructor = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructor'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/ins');
            return res.json();
        }
    })
    return [instructor, loading, refetch]
};

export default useInstructors;