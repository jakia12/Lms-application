import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroSlider from '../../components/heroSlider/HeroSlider';
import SingleCard from '../../components/singleCard/SingleCard';
import { getCourses } from '../../util/api';

const Home = () => {
    const courses = useLoaderData();

    console.log(courses);

    return (
        <>
            <HeroSlider />
            <section className='courses_section clearfix py-14 lg:py-20 bg-lightGray'>
                <div className="container mx-auto max-w-7xl md:px-10 px-6">
                    <h2 className="text-4xl mt-2 mb-10 text-left pl-4 ml-4 text-dark font-semibold border-teal-400 border-l-4">Popular Courses</h2>
                    <div className="flex  itmes-center flex-wrap">
                        {
                            courses.map((course) => (
                                <div className='lg:w-4/12 md:w-6/12  w-full lg:basis-4/12 grow-1 shrink-1'>
                                    <SingleCard
                                        key={course.id}
                                        course={course}
                                    />

                                </div>


                            ))
                        }
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home;

export const loader = () => {
    return getCourses();
}


