import React, { useState } from 'react'
import GlobalButton from '../GlobalButton'


const PageHeader = () => {

    const [btn, setBtn] = useState({
        innerText: "Learn More"
    });
    return (
        <div>
            <div className="hero_content_wrapper px-10 lg:px-0 ">

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
    )
}

export default PageHeader
