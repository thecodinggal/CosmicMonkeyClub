import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faDiscord, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'



function SocialMedia(){
    return(
    <div className="text-white text-xl">
        <Link to="https://discord.gg/cosmicnft" target="_blank"><a className="pr-4"><FontAwesomeIcon icon={faDiscord}/></a></Link>
        <Link to="https://twitter.com/cosmicmonkeynft" target="_blank"><a className="pr-4"><FontAwesomeIcon icon={faTwitter}/></a></Link>
        <Link to="https://instagram.com/cosmicmonkeyclub" target="_blank"><a className="pr-4"><FontAwesomeIcon icon={faInstagram}/></a></Link>
        <Link target="_blank"><a><FontAwesomeIcon icon={faTiktok}/></a></Link>
    </div>
    )
}
export default SocialMedia

