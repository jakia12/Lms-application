import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className=' py-20 bg-lightGray'>
            <div className="text-center ">
                <h1 className="text-7xl my-3 font-semibold text-teal-400">
                    404 !
                </h1>
                <h3 className="text-lg text-dark font-medium">Oops!!! Page not found</h3>
                <Link to="/">
                    <div className="text-center mt-5">
                        <button className="px-8 py-3 bg-teal-400 text-white text-lg rounded-lg">Back to Home</button>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default NotFound
