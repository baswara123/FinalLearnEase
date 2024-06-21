"use client";
import { useRef, useState } from "react";
import '../signup/leftstyle.css';
import Link from "next/link";

function Forms() {
    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const dobRef = useRef(null);
    const termsRef = useRef(null);
    const [message, setMessage] = useState('');

    async function submithandler(e) {
        e.preventDefault();

        const email = emailRef.current.value;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        try {
            const res = await fetch('/API/User', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: username, email, password }),
            });
            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            console.log(error);
            setMessage('An unexpected error occurred.');
        }
    }

    return (
        <div>
            <form className="inputbox" onSubmit={submithandler}>
                <div className="email">
                    Email :<br />
                    <input
                        className='emailbox'
                        type='email'
                        placeholder='Input Your Email'
                        ref={emailRef}
                    />
                </div>
                <div className="username">
                    Username :<br />
                    <input
                        className='usernamebox'
                        type='text'
                        placeholder='Input Your Username'
                        ref={usernameRef}
                    />
                </div>
                <div className="password">
                    Password :<br />
                    <input
                        className='passwordbox'
                        type='password'
                        placeholder='Input Your Password'
                        ref={passwordRef}
                    />
                </div>
                <div className="DOB">
                    Date of Birth<br />
                    <input className='DOBbox' type='date' ref={dobRef} />
                </div>
                <div className="terms">
                    <input type='checkbox' ref={termsRef} /> I Agree to Terms and Conditions
                </div>
                <Link href="/login">
                    <button className="signupbtn" type='submit'>
                        SIGN UP
                    </button>
                </Link>
                
                <div className="login">
                    Already have an account? <Link href="/login">login here</Link>
                </div>
            </form>
            {message && <div className="message">{message}</div>} {/* Display message */}
        </div>
    );
}

export default Forms;
