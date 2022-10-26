import React from 'react'
import { DataState } from '../../context/DataContext'
import { TfiAngleDoubleRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const CourseLink = () => {

    const { courses } = DataState();
    const slicedCourse = courses.slice(0, 6);

    return (
        <div className='text-lg text-medium text-dark '>
            {
                slicedCourse.map((course) => (
                    <Link to={`/singleCourse/${course.id}`}>
                        <div className='flex items-center'>

                            <span className="text-teal-400 ">
                                <TfiAngleDoubleRight />
                            </span>
                            <span span className='text-dark text-normal font-medium pl-3 py-1 text-left'>{course.title} </span>

                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default CourseLink
