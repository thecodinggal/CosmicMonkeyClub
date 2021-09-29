import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faDiscord, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'



function SocialMedia(){
    return(
    <div className="text-white text-xl z-10">
        <a href="https://discord.gg/cosmicnft" target="_blank" rel="noopener noreferrer" className="pr-2"> <FontAwesomeIcon icon={faDiscord}/></a>
        <a href="https://twitter.com/cosmicmonkeynft" target="_blank" rel="noopener noreferrer" className="pr-2"> <FontAwesomeIcon icon={faTwitter}/></a>
        <a href="https://instagram.com/cosmicmonkeyclub" target="_blank" rel="noopener noreferrer" className="pr-2"> <FontAwesomeIcon icon={faInstagram}/></a>
        <a href="https://www.tiktok.com/@cosmicmonkeyclub" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTiktok}/></a>
    </div>
    )
}
export default SocialMedia

