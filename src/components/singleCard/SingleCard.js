import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoDocumentTextOutline } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import './SingleCard.css';
import { Link } from 'react-router-dom';

const SingleCard = ({ course }) => {
    const { id, name, image, title, price, rating, instructor } = course;
    const { name: instructorName, thumbnail_url } = instructor;
    return (

        <Link Link to={`/singleCourse/${id}`}>
            <div className="card_box  md:mx-4 lg:mx-4 rounded-lg border bg-white mb-8">
                <div className=" img_wrapper rounded-t-lg relative">
                    <img src={image} className="rounded-t-lg w-full card_image" alt="" />
                    <span className="course_name textl-lx font-medium text-white absolute left-6 rounded-tl-lg rounded-br-lg px-8 py-2 bg-teal-400 top-4"> {name}</span>
                    <div className="instructor_data flex justify-between items-center absolute top-2/3 left-6">
                        <img src={thumbnail_url} alt="" className="instructor_image rounded-full border-2 border-teal-400" width="70px" height="70px" />
                        <span className="ml-4 text-white">{instructorName} </span>
                    </div>
                </div>

                <div className="card_body px-6 py-8">
                    <Link to={`/singleCourse/${id}`}>
                        <h3 className='text-xl text-dark font-semibold pb-4 ml-0 pl-0 card_title'>{title} </h3>
                    </Link>

                    <div class="flex items-center pb-4">
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{rating} </p>
                    </div>

                    <div className="icon_group">
                        {/* <div className="document">
                      <IoDocumentTextOutline />
                      <span className="text-lg"></span>
                  </div>
                  <div className="student">
                      <HiOutlineUsers />
                      <span className="text-lg"></span>
                  </div> */}

                    </div>
                    <div className="flex items-center justify-between">
                        <div className="price">
                            <h3 className="text-xl text-bold text-yellowDark">${price} </h3>
                        </div>
                        <div className="wishList">
                            <FaHeart className='text-2xl text-darkGray' />
                        </div>
                    </div>

                </div>

            </div>
        </Link>
    )
}

export default SingleCard
