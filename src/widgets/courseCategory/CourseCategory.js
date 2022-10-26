import React from 'react'
import GlobalButton from '../../components/GlobalButton'
import { DataState } from '../../context/DataContext'
import { Link } from 'react-router-dom'

const CourseCategory = () => {
    const { courses } = DataState();


    return (
        <div className='flex flex-wrap '>
            {
                courses.map((course) => (
                    <Link to={`/singleCourse/${course.id}`}>
                        <button className='bg-teal-400 px-4 py-2 text-white mx-1 my-1 rounded-lg'>{course.name}</button>

                    </Link>
                ))
            }
        </div>
    )
}

export default CourseCategory
