import Image from 'next/image';
import logo from '../assets/logo.png'
import './Footer.css'
import { FaInstagram, FaTwitter,FaYoutube,FaFacebook,FaDiscord  } from "react-icons/fa";
function Footer(){
    return(
        <div className="Container">
            <Image className="logof" src={logo}></Image>
            <div className="sosmed">
                <FaInstagram />
                <FaTwitter />
                <FaFacebook />
                <FaYoutube />
                <FaDiscord />
            </div>
            <div className="info">
                <a>Privacy Policy</a>
                <a>Contact Us</a>
                <a>Customer Service</a>
                <a>About</a>
            </div>
        </div>
    );
}

export default Footer