import React, { useState } from 'react'
import PageHeader from '../../components/pageHeader/PageHeader';
import SingleCard from '../../components/singleCard/SingleCard';
import { DataState } from '../../context/DataContext'
import CourseCategory from '../../widgets/courseCategory/CourseCategory';
import CourseLink from '../../widgets/courseLink/CourseLink';
import ImgGallery from '../../widgets/imgGallery/ImgGallery';
import RelatedPost from '../../widgets/relatedPost/RelatedPost';
import SearchForm from '../../widgets/searchForm/SearchForm';
import SocialIcon from '../../widgets/socialShare/SocialIcon';
import './Courses.css';

const Courses = () => {

    const { courses, searchText } = DataState();

    const filteredCourse = courses.filter((course) => course.name.toLowerCase().includes(searchText.toLowerCase()))

    console.log(courses);

    return (
        <>
            <section className="header_section banner_bg">
                <div className="banner_content flex justify-center items-center">
                    <PageHeader />
                </div>
            </section>
            <section className='courses_section lg:py-20 py-16'>
                <div className="container w-full mx-auto lg:max-w-7xl md:px-10 px-6">
                    <div className="flex  flex-wrap">
                        <div className='lg:w-8/12 w-full'>
                            <div className="flex  flex-wrap">
                                {

                                    filteredCourse.map((course) => (
                                        <div className='lg:w-6/12 md:w-6/12  w-full  '>
                                            <SingleCard
                                                key={course.id}
                                                course={course}
                                            />
                                        </div>


                                    ))
                                }
                            </div>
                        </div>
                        <div className='lg:w-4/12 w-full'>

                            <div className="widgets_wrapper px-4 bg-white">
                                <h2 className='text-2xl text-semibold text-dark text-left mb-2'>Search by category</h2>
                                <hr className='mb-4  bg-teal-500' />
                                <SearchForm />

                                <h2 className='text-2xl text-semibold text-dark text-left mb-2 mt-10'>Course Link</h2>
                                <hr className='mb-4 bg-teal-500' />
                                <CourseLink />

                                <h2 className='text-2xl text-semibold text-dark text-left mb-2 mt-10'>Course Categories</h2>
                                <hr className='mb-4 bg-teal-500' />
                                <CourseCategory />
                                <h2 className='text-2xl text-semibold text-dark text-left mb-2 mt-10'>Related Course</h2>
                                <hr className='mb-4 bg-teal-500' />
                                <RelatedPost />

                                <h2 className='text-2xl text-semibold text-dark text-left mb-2 mt-10'>Follow Us at</h2>
                                <hr className='mb-4 bg-teal-500' />
                                <SocialIcon />

                                <h2 className='text-2xl text-semibold text-dark text-left mb-2 mt-10'>Image Gallery</h2>
                                <hr className='mb-4 bg-teal-500' />
                                <ImgGallery />
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}

export default Courses
