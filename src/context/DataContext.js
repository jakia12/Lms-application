import React, { createContext, useContext, useEffect, useState } from 'react'

const CourseContext = createContext();
const DataContext = ({ children }) => {

    const [courses, setCourses] = useState([]);
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        fetch("https://lms-server-jakia12.vercel.app/api/courses")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    const dataInfo = { courses, searchText, setSearchText }

    return (
        <CourseContext.Provider value={dataInfo}>
            {children}
        </CourseContext.Provider>
    )
}

export default DataContext;

//access the dataState from anywhere
export const DataState = () => {
    return useContext(CourseContext);
}
