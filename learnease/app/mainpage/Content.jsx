import './Content.css'
import algebra from '../assets/algebra.jpg'
import photography from '../assets/photography.jpg'
import cooking from '../assets/cooking.jpg'
import programming from '../assets/programming.jpg'
import video from '../assets/video.jpg'
import react from '../assets/react.png'
import calculus from '../assets/calculus.jpg'
import marathon from '../assets/marathon.jpg'
import graphic from '../assets/graphic.jpg'
import graphb from '../assets/graphb.jpg'
import graphintro from '../assets/graphintro.jpg'
import color from '../assets/color.jpg'
import profile1 from '../assets/profile1.jpg'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import Link from 'next/link'
 function Content(){
    return(
        <div className="course">
        <div className="course-item">
                <div className="tulisan">
                    <h1 className="course-title">Trending</h1>
                    <a className="showall">Show All</a>
                </div>
                
                <div className="course-card">
                    <Link href="/coursepage" className="card">
                        <div >
                            <Image className="course-pic" src={algebra}></Image>
                            <div className="profileq">
                                <Image className="muka" src={profile1}></Image>
                                <div className='tes'>John</div>
                            </div>
                            <a className="judul">Linear Algebra Full Course</a>
                            <div className="rating">
                                <FaStar />
                                <a>4.7</a>
                            </div>
                            <a className="harga">Rp 300.000,00</a>
                        </div>
                    </Link>
                    <Link href="/coursepage" className="card">
                        <div >
                            <Image className="course-pic" src={photography}></Image>
                            <div className="profileq">
                                <Image className="muka" src={profile1}></Image>
                                <div className='tes'>Ella</div>
                            </div>
                            <a className="judul">Festival & Event Photography</a>
                            <div className="rating">
                                <FaStar />
                                <a>4.8</a>
                            </div>
                            <a className="harga">Rp 250.000,00</a>
                        </div>
                    </Link>
                    <Link href="/coursepage" className="card">
                        <div >
                            <Image className="course-pic" src={programming}></Image>
                            <div className="profileq">
                                <Image className="muka" src={profile1}></Image>
                                <div className='tes'>Saul Goodman</div>
                            </div>
                            <a className="judul">Programming 101</a>
                            <div className="rating">
                                <FaStar />  
                                <a>4.7</a>
                            </div>
                            <a className="harga">Rp 100.000,00</a>
                        </div>
                    </Link>
                    <Link href="/coursepage" className="card">
                        <div>
                            <Image className="course-pic" src={cooking}></Image>
                            <div className="profileq">
                                <Image className="muka" src={profile1}></Image>
                                <div className='tes'>Kim Wexler</div>
                            </div>
                            <a className="judul">Mastering Basic Cooking Skills</a>
                            <div className="rating">
                                <FaStar />
                                <a>4.9</a>
                            </div>
                            <a className="harga">Rp 150.000,00</a>
                        </div>
                    </Link>
                    

            
                </div>

                <div className="tulisan">
                    <h1 className="course-title">Best Seller</h1>
                    <a className="showall">Show All</a>
                </div>
                <div className="course-card">
                    <div className="card">
                        <Image className="course-pic" src={react}></Image>
                        <div className="profileq">
                            <Image className="muka" src={profile1}></Image>
                            <div className='tes'>Howard Hamlin</div>
                        </div>
                        <a className="judul">React for Beginners</a>
                        <div className="rating">
                            <FaStar />
                            <a>4.7</a>
                        </div>
                        <a className="harga">Rp 100.000,00</a>
                    </div>
                    <div className="card">
                        <Image className="course-pic" src={calculus}></Image>
                        <div className="profileq">
                            <Image className="muka" src={profile1}></Image>
                            <div className='tes'>Chuck McGill</div>
                        </div>
                        <a className="judul">Calculus 1 Full Course</a>
                        <div className="rating">
                            <FaStar />
                            <a>4.2</a>
                        </div>
                        <a className="harga">Rp 350.000,00</a>
                    </div>
                    <div className="card">
                        <Image className="course-pic" src={video}></Image>
                        <div className="profileq">
                            <Image className="muka" src={profile1}></Image>
                            <div className='tes'>Mike Ehrmantraut</div>
                        </div>
                        <a className="judul">Videography : Basics</a>
                        <div className="rating">
                            <FaStar />
                            <a>4.9</a>
                        </div>
                        <a className="harga">Rp 250.000,00</a>
                    </div>
                    <div className="card">
                        <Image className="course-pic" src={marathon}></Image>
                        <div className="profileq">
                            <Image className="muka" src={profile1}></Image>
                            <div className='tes'>Ignacio Varga</div>
                        </div>
                        <a className="judul">Marathon Preparation</a>
                        <div className="rating">
                            <FaStar />
                            <a>4.9</a>
                        </div>
                        <a className="harga">Rp 175.000,00</a>
                    </div>
                </div>

                <div className="tulisan">
                    <h1 className="course-title">Based On Your Preferences</h1>
                    <a className="showall">Show All</a>
                </div>
                <div className="course-card">
                    <div className="card">
                        <Image className="course-pic" src={graphic}></Image>
                        <div className="profileq">
                            <Image className="muka" src={profile1}></Image>
                            <div className='tes'>Gustavo Fring</div>
                        </div>
                        <a className="judul">Graphic Design Full Course</a>
                        <div className="rating">
                            <FaStar />
                            <a>4.6</a>
                        </div>
                        <a className="harga">Rp 450.000,00</a>
                    </div>
                    <div className="card">
                        <Image className="course-pic" src={color}></Image>
                        <div className="profileq">
                            <Image className="muka" src={profile1}></Image>
                            <div className='tes'>Cliff Main</div>
                        </div>
                        <a className="judul">Graphic Design : Colour Palette</a>
                        <div className="rating">
                            <FaStar />
                            <a>4.7</a>
                        </div>
                        <a className="harga">Rp 270.000,00</a>
                    </div>
                    <div className="card">
                        <Image className="course-pic" src={graphb}></Image>
                        <div className="profileq">
                            <Image className="muka" src={profile1}></Image>
                            <div className='tes'>Rich Schweikart</div>
                        </div>
                        <a className="judul">Graphic Design : Business</a>
                        <div className="rating">
                            <FaStar />
                            <a>4.7</a>
                        </div>
                        <a className="harga">Rp 200.000,00</a>
                    </div>
                    <div className="card">
                        <Image className="course-pic" src={graphintro}></Image>
                        <div className="profileq">
                            <Image className="muka" src={profile1}></Image>
                            <div className='tes'>Lalo</div>
                        </div>
                        <a className="judul">Graphic Design 101</a>
                        <div className="rating">
                            <FaStar />
                            <a>4.3</a>
                        </div>
                        <a className="harga">Rp 300.000,00</a>
                    </div>
                </div>

            
        </div>
       
    </div> 
    );
}

export default Content