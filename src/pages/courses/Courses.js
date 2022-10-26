import React, { useState } from 'react'
import GlobalButton from '../../components/GlobalButton'
import SingleCard from '../../components/singleCard/SingleCard';
import { DataState } from '../../context/DataContext'
import CourseLink from '../../widgets/courseLink/CourseLink';
import SearchForm from '../../widgets/searchForm/SearchForm';

const Courses = () => {

    const { courses, searchText } = DataState();

    const filteredCourse = courses.filter((course) => course.name.toLowerCase().includes(searchText.toLowerCase()))

    console.log(courses);

    return (
        <section className='courses_section lg:py-20 py-16'>
            <div className="container mx-auto max-w-7xl md:px-10 px-6">
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

                            <h2 className='text-2xl text-semibold text-dark text-left mb-2 mt-6'>Course Link</h2>
                            <hr className='mb-4 bg-teal-500' />
                            <CourseLink />
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Courses
