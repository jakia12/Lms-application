import React from 'react';
import { Link } from 'react-router-dom';

const GlobalButton = ({ text }) => {
    return (
        <>
            <Link to="/blog">
                <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-400 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-7 py-3 text-center mr-2 mb-2">{text}</button>
            </Link>
        </>
    )
}

export default GlobalButton
