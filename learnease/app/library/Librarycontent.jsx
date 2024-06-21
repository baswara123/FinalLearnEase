import Image from "next/image";
import graphic from "../assets/graphic.jpg"
import graphintro from "../assets/graphintro.jpg"
import graphb from "../assets/graphb.jpg"
import color from "../assets/color.jpg"
import "./Librarycontent.css"

function Librarycontent(){
    return(
        <div className="semuanya">
            <div className="kirilib">
                <div className="coursegroup">
                    <div className="libtitle">
                        <h1 className="atastitle">Library</h1>
                    </div>
                <div className="courselist">
                    <div className="librarycard">
                        <Image className="librarypic"src={graphic}></Image>
                        <h1>Graphic Design Full Course</h1>
                        <div className="progress">
                            <div className="percentage1">
                                50%
                            </div>
                        </div>
                    </div>
                    <div className="librarycard">
                        <Image className="librarypic"src={graphintro}></Image>
                        <h1>Graphic Design 101</h1>
                        <div className="progress">
                            <div className="percentage2">
                                100%
                            </div>
                        </div>
                    </div>
                    <div className="librarycard">
                        <Image className="librarypic"src={graphb}></Image>
                        <h1>Graphic Design : Business</h1>
                        <div className="progress">
                            <div className="percentage2">
                                100%
                            </div>
                        </div>
                    </div>
                    <div className="librarycard">
                        <Image className="librarypic"src={color}></Image>
                        <h1>Graphic Design : Colour Palette</h1>
                        <div className="progress">
                            <div className="percentage1">
                                50%
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="kananlib">
            <h1>About This Course</h1>
                <div className="aboutbox">
                    <Image className="aboutpic"src={graphic}></Image>
                    <h1>Title : Graphic Design Full Course</h1>
                    <h1>Creator : Gustavo Fring</h1>
                    <h1>Content : </h1>
                        <ul className="list">
                            <li>7 Videos</li>
                            <li>3 e-books</li>
                            <li>4 hours live tutoring</li>
                        </ul>
                    <button className="openbtn">Open</button>
                </div>
            </div>
        </div>
        
    );
}

export default Librarycontent