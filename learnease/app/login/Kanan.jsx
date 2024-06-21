"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logolearn from '../assets/logo.png';
import './Kanan.css';
import { FaGoogle, FaApple } from "react-icons/fa";
import Link from 'next/link';

function Kanan() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const res = await fetch('/API/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage('Login successful!');
                // Redirect to the main page or a protected route
                setTimeout(() => {
                    router.push('/mainpage');
                }, 2000); // 2 seconds delay before redirection
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            console.log(error);
            setMessage('An unexpected error occurred.');
        }
    }

    return (
        <div className="kotakkanan">
            <Image src={logolearn} height={130} alt="Logo" />
            <h1>Welcome!</h1>
            <div className="isi">
                <form onSubmit={handleLogin}>
                    <div className="email">
                        Email : <br />
                        <input
                            className="inputemail"
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="password">
                        Password : <br />
                        <input
                            className="inputpass"
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className='forgot'><a href="#">Forgot Password?</a></div>
                    </div>
                    <button className='signbtn' type="submit">Sign in</button>
                </form>
                {message && <div className="message">{message}</div>}
                <br />
                <a href="#">Don't have an account? </a>
                <Link href="/signup" className="register">Register now</Link>
                <br />
                <button className='googlebtn'><FaGoogle /> Continue with Google</button>
                <br />
                <button className='applebtn'><FaApple /> Continue with Apple</button>
            </div>
        </div>
    );
}

export default Kanan;
