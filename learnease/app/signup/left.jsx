
import Image from 'next/image';
import logo from '../assets/logo.png';
import '../signup/leftstyle.css';
import Forms from './form';

function Left() {
    return (
        <div className='left'>
            <Image className="logo" height={150} src={logo} alt="Logo" />
            <h2>SIGN UP</h2>
            <Forms />
        </div>
    );
}

export default Left;
