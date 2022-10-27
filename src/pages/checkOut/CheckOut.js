import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { getSingleCrsData } from '../../util/api';

const CheckOut = () => {
    const course = useLoaderData();

    return (
        <div className='py-20 bg-lightGray'>
            <div className="container w-full lg:max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-teal-400"> {course.name} Course</h1>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;

export const loader = ({ params }) => {
    const uId = params.courseId;
    return getSingleCrsData(uId);
}
