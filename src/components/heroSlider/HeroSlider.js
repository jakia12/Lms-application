import React, { useState } from 'react'
import GlobalButton from '../GlobalButton'
import Button from '../GlobalButton';
import './HeroSlider.css';

const HeroSlider = () => {

    const [btn, setBtn] = useState({
        innerText: "Learn More"
    });

    return (
        <section className=' hero_section clearfix hero_bg'>
            <div className="hero_content flex justify-center items-center">
                <div className="hero_content_wrapper px-10 lg:px-0 ">
                    <h2 className="text-white text-5xl font-semibold pb-7 leading-10 lg:leading-none">
                        Explore Tech-Academy Today
                    </h2>
                    <p className='text-white max-w-xl mx-auto  pb-9 leading-relaxed'>
                        We are here to help tech-ambitious people to convert their dream into reality and lead the tech world. So what are you waiting for?
                    </p>
                    <div className="text-center">
                        <GlobalButton
                            text={btn.innerText}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSlider



