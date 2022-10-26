import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { getSingleCrsData } from '../../util/api';
import { IoDocumentTextOutline, IoCaretForwardCircleSharp } from 'react-icons/io5';
import { Rating } from 'flowbite-react';
import './PageDetails.css';

const PageDetails = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <>
            <header className='singlepage_banner lg:py-18 lg:px-28 p-16 bg-darkSlate'>
                <div className="md:flex">
                    <div className=" header_content w-full lg:w-8/12  text-left">
                        <h2 className="text-3xl  text-white font-semibold">{course.title} </h2>
                        <p className="text-white my-6">
                            {course.subTitle}
                        </p>
                        <div className="instructor_info flex items-center">
                            <img src={course.instructor.thumbnail_url} alt="" className="rounded-full" width="65px" height="65px" />
                            <div className="ml-4">
                                <h3 className="text-normal text-white font-normal">Professor</h3>
                                <h4 className="text-lg text-white font-medium"> {course.instructor.name}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-4/12 '>

                    </div>

                </div>

            </header>
            {/* header end */}
            <section className="singlePage_body">
                <div className=' container w-full mx-auto lg:max-w-7xl md:px-10 px-6'>
                    <div className="md:flex ">
                        <div className='w-full lg:w-8/12 md:w-8/12 max-w-full '>
                            <div className="mr-5">
                                <div className="inline_course_info flex items-center text-left justify-between pt-14 pb:10 lg:pt-16 lg:pb-10">
                                    <div className="category_data">
                                        <h3 className=" mb-2 text-xl text-teal-400 font-medium"> Category</h3>
                                        <h4 className="text-normal text-dark font-medium"> {course.name}</h4>
                                    </div>


                                    {/* </div>                                <div className=" review_data mx-">
                                    <h3 className="text-xl text-dark font-medium">Review</h3>
                                    <Rating>
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star /> */}

                                    <div className="download_data">
                                        <h3 className="text-xl mb-3 text-teal-400 font-medium">Download</h3>
                                        <IoDocumentTextOutline />
                                    </div>
                                </div>
                                <hr className='bg-darkGray' />
                                {/* inline data end */}
                                <div className=" course_overview text-left">
                                    <h2 className="text-2xl text-dark font-semibold my-4">
                                        Course Overview
                                    </h2>
                                    <ul className='marker:text-teal-400 overview_list list-square pl-4'>
                                        {
                                            course.course_overview.map((overView) => (
                                                <li className='text-normal  text-dark my-2'>{overView} </li>
                                            ))
                                        }

                                    </ul>
                                </div>

                                {/* course overview end*/}

                                <div className="instructor_bio_wrapper border rounded my-16">
                                    <h3 className="text-2xl text-dark font-medium px-8 pt-4 pb-2">
                                        Instructor
                                    </h3>
                                    <hr className='bg-darkGray my-4' />
                                    <div className="instructor_bio flex items-start px-8 py-10">
                                        <img src={course.instructor.thumbnail_url} alt="" className="rounded-full w-20 h-20" />
                                        <div className=" bio_info ml-4">
                                            <h3 className="text-lg text-teal-400 font-medium">{course.instructor.name} </h3>
                                            <h4 className="text-lg font-norml text-dark my-1">Professor</h4>
                                            <p className="text-dark">{course.instructor.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right sidebar */}
                        <div className='w-full lg:w-4/12 md:w-4/12'>
                            <div className="course_feature_card p-2 border rounded lg:my-14 my-10 ml-5">
                                <img src={course.image} alt="" className="rounded w-full" />
                                <div className="feature_card_body px-3">
                                    <h3 className="text-xl font-semibold text-dark my-5">Course Features</h3>
                                    <ul>
                                        {
                                            course.course_features.map((feature) => (
                                                <li className='my-2 '>
                                                    <div className="flex items-center">
                                                        <span className="feature_icon text-teal-400 "> <IoCaretForwardCircleSharp />

                                                        </span>
                                                        <span className='ml-3'> {feature}</span>
                                                    </div>


                                                </li>
                                            ))
                                        }

                                    </ul>
                                    <hr className='bg-darkGray my-4' />
                                </div>
                                <div className="feature_card_footer flex justify-between pt-1 pb-3 px-3">
                                    <button className="py-3 rounded-lg px-7 bg-teal-400 text-white text-normal">Buy Now</button>
                                    <h3 className="text-xl text-dark font-medium">$ {course.price}</h3>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}

export default PageDetails;

export const loader = ({ params }) => {
    const uId = params.courseId;
    console.log(uId);
    return getSingleCrsData(uId);
}
