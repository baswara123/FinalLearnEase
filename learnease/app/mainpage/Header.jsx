import './Header.css'
import searchlogo from '../assets/search.png'
import profilelogo from '../assets/user.png'
import logo from '../assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
function Header()  {
    return(

        <header className="header">
            <Image className="logoh" height={150} src={logo}></Image>

            <div className='navp'>
                <Link href="/mainpage" className="orders">Home</Link>
                <Link href="/cart" className="orders">Orders</Link>
                <Link href="/library" className="orders">library</Link>
            </div>
            
            <div className="areakanan">
                <div className="searcharea">
                    <input className="searchbar"type="text" placeholder='Search'></input>
                    <Image className="kaca" height={100} width={30} src={searchlogo}></Image>
                </div>
                <Link href="/profile"><Image className="user" height={100} width={50} src={profilelogo}></Image></Link>
            </div>

            
            
        </header>
    );
}

export default Header