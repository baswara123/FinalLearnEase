import Link from 'next/link';
import coursePic from '../assets/calculus.jpg'
import './Bodystyle.css'

import Image from 'next/image';
import { FaHeart, FaBars, FaShareAlt, FaStar } from "react-icons/fa";


function Body(){
    return(
        
        <div className="body">
        
            <div className="ProductDesc">
                <div className="judul">
                    <h1>Festival & Event Photography</h1>
                </div>
                <div className="rating">
                    RATE : 
                    <div className="star">
                    <FaStar/>
                    </div>
                    4.5 (142)
                    
                    
                </div>

                <div className="difficulty">
               
                    DIFFICULTY : 
                    <div className="star">
                        <FaStar/>
                    </div>
                    4.8 
                </div>
                
                <div className="CourseImg">
                    <Image src={coursePic} alt="Coures Image" className="CImg"></Image>
                </div>
                
                <div className="Desc">
                    <h3>ABOUT THIS COURSE:</h3>
                    Ilmu yang mempelajari perubahan, sebagaimana geometri yang mempelajari bentuk dan aljabar yang mempelajari operasi dan penerapannya untuk memecahkan persamaan.
                    <li>Kalkulus Diferensial:</li>
                        Mempelajari laju perubahan suatu fungsi Konsep utama: Turunan (derivative) Turunan memberikan informasi tentang kemiringan garis singgung kurva fungsi Digunakan untuk menganalisis perilaku lokal fungsi seperti titik ekstrim, titik belok, dll. Aturan penting: Aturan Rantai, Turunan Trigonometri, Turunan Implisit, dsb.
                    <li>Kalkulus Integral</li>
                    Mempelajari akumulasi atau penjumlahan kuantitas yang berubah secara kontinyu Konsep utama: Integral Integral memberikan informasi tentang luas di bawah kurva fungsi atau volume benda putar Topik penting: Integral Tak Tentu, Integral Tentu, Teorema Fundamental Kalkulus Teknik Integrasi: Substitusi, Integral Parsial, Substitusi Trigonometri, dll. Aplikasi Integral: Menghitung luas, volume, panjang lengkungan, pusat massa, dsb.
                    <br></br>
                    <li>Konsep dasar lainnya:</li>
                    Limit dan Kontinuitas (menjadi dasar kalkulus diferensial dan integral)
                    Deret Tak Hingga Kalkulus memiliki aplikasi luas di berbagai bidang seperti fisika, teknik, ekonomi, biologi, dan banyak ilmu lainnya yang melibatkan pemodelan perubahan dan akumulasi.
                </div>
                <div className="lecturer">LECTURER</div>
                <div className="lecCard">
                    <div className="lec">
                        <i class="fa-regular fa-user"></i>
                        Nama : Rapip<br></br>
                        Email : sss@gmail.com
                    </div>
                    <div className="lec">
                        <i class="fa-regular fa-user"></i>
                        Nama : Alpredo<br></br>
                        Email : sss@gmail.com
                    </div>
                    <div className="lec">
                        <i class="fa-regular fa-user"></i>
                        Nama : Aldo<br></br>
                        Email : sss@gmail.com
                    </div>
                    <div className="lec">
                        <i class="fa-regular fa-user"></i>
                        Nama : Aldo<br></br>
                        Email : sss@gmail.com
                    </div>
                </div>

            </div>

            <div className="ProductPrice">
                <div className="likes">
                    <div className="heart1">
                        <FaBars/>
                    </div>
                    <div className="heart">
                        <FaHeart />
                    </div>
                    
                    <div className="totallikes">1.112</div>
                    <div className="heart1">
                        <FaShareAlt />
                    </div>
                </div>
                <h1>Rp 50.000</h1>
                <div className="discount">
                    Save up to 10% with Subscribe to Save<br></br>
                    <div className="bennefit">
                        Benefit :<br></br>
                        <li>E-Book</li>
                        <li>Knowledge</li>
                        <li>Exercises</li>
                        <li>Tutorial Video</li>
                    </div>
                    
                    
                </div>
                <div className="terms">
                    <input type="checkbox" required></input>I Agree to Terms and Conditions
                </div>
                
                    <Link href="/cart" className="COBtn">CHECKOUT</Link>
                
                <div className="Cart">
                
                    <a>ADD TO CART</a>
                </div>

                <div className="details">SEE DETAILS</div>
                

            </div>
            
        
        </div>
    );
}

export default Body