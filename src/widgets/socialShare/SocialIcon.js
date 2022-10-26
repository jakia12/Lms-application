import React from 'react'
import { GrFacebookOption, GrLinkedinOption, GrTwitter, GrInstagram, GrPinterest } from 'react-icons/gr';
import './SocialIcon.css'

const SocialIcon = () => {
    return (
        <div className='icon_wrapper flex place-items-center mt-3'>
            <a className="social_icon" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <GrFacebookOption />
            </a>

            <a className="social_icon" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <GrInstagram />
            </a>

            <a className="social_icon" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <GrLinkedinOption />
            </a>
            <a className="social_icon" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <GrTwitter />

            </a>
            <a className="social_icon" href=" https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                <GrPinterest />
            </a>
        </div>
    )
}

export default SocialIcon
