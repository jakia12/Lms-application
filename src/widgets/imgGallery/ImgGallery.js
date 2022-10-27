import React from 'react'
import { Link } from 'react-router-dom';
import { DataState } from '../../context/DataContext'

const ImgGallery = () => {
    const { courses } = DataState();

    return (
        <div className='img_gallery'>
            <div className=' flex flex-wrap items-center '>
                {
                    courses.map((course) => (
                        <div className="w-4/12 ">
                            <Link to={`/singleCourse/${course.id}`}>
                                <div className=" mr-2 mb-2">
                                    <img src={course.image} className="rounded w-full  border" alt="course-image" />
                                </div>
                            </Link>
                        </div>


                    ))
                }
            </div>
        </div >

    )
}

export default ImgGallery
