import './Banner.css'
import saul from '../assets/saul-removebg.png'
import ijo1 from '../assets/ijo1.png'
import kotak from '../assets/kotak.png'
import garis from '../assets/garis.png'
import Image from 'next/image'
import { FaDatabase, FaMusic, FaFilm, FaPalette, FaReact, FaCodeBranch } from "react-icons/fa";
function Banner(){
    return(
        <div className="bannercontainer">
            <div className="kata">
                <h1 className="ajak">Welcome to Learnease: Discover a world of knowledge and 
                skill <br></br>development with our diverse range of courses.</h1>
            </div>
            <Image className="fotobn" width={355} height={400} src={saul}></Image>
            <Image className="ijo1" width={560} height={338} src={ijo1}></Image>
            <Image className="garis" width={500} height={300} src={garis}></Image>
            <div className="icon1">
            <FaDatabase />
            </div>
            <div className="icon2">
            <FaMusic />
            </div>
            <div className="icon3">
            <FaFilm />
            </div>
            <div className="icon4">
            <FaPalette />
            </div>
            <div className="icon5">
            <FaReact />
            </div>
            <div className="icon6">
            <FaCodeBranch />
            </div>
            <div className="icon7">
            <FaDatabase />
            </div>
            <div className="icon8">
            <FaMusic />
            </div>
            <div className="icon9">
            <FaFilm />
            </div>
            <div className="icon10">
            <FaPalette />
            </div>
            <div className="icon11">
            <FaReact />
            </div>
        </div>
        
    );
}

export default Banner