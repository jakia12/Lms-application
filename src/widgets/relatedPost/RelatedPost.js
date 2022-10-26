import React from 'react'
import { Link } from 'react-router-dom'
import { DataState } from '../../context/DataContext'

const RelatedPost = () => {
    const { courses } = DataState();
    const slicedData = courses.slice(0, 4);
    return (
        <div className='related_course_wrapper'>
            {
                slicedData.map((course) => (
                    <Link to={`/singleCourse/${course.id}`}>
                        <div className="flex items-center mt-2">
                            <img src={course.image} alt="" width="120px" height="120px" />
                            <div className="course_info text-left ml-5">
                                <h4 className="text-normal text-teal-400 font-medium "> {course.name}</h4>
                                <h4 className="text-normal text-dark font-medium "> {course.title}</h4>
                                <span className="text-lg text-dark font-medium">${course.price}</span>
                            </div>
                        </div>
                        <hr className='bg-dark mt-2' />
                    </Link>
                ))
            }


        </div>
    )
}

export default RelatedPost
