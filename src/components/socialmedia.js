import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiscord, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'




function SocialMedia({size}){
    const sizes = {
        default: 'text-xl',
        lg: 'text-4xl',
        xl: 'text-6xl'
    }
    return(
    <div className={`text-white z-10 ${sizes[size] || sizes.default}`}>
        <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="pr-2"> <FontAwesomeIcon icon={faDiscord} className="hover:text-primary-green transition duration-200 ease-in-out"/></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="pr-2"> <FontAwesomeIcon icon={faTwitter} className="hover:text-primary-lightblue transition duration-200 ease-in-out"/></a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="pr-2"> <FontAwesomeIcon icon={faInstagram} className="hover:text-primary-orange transition duration-200 ease-in-out"/></a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTiktok} className="hover:text-primary-red transition duration-200 ease-in-out"/></a>
    </div>
    )
}
export default SocialMedia

