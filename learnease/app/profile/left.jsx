"use client";
import Image from 'next/image';
import '../profile/leftstyle.css';
import coursePic from '../assets/Calculus.jpg';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function Left() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await fetch("/API/User");
        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  return (
    <div className="lefts">
      {user &&(
        <>
          
          <h1>Your Beatiful Profile</h1>
          <div className="gambar">
            <Image src={coursePic} className="profilepic" alt="Profile Picture"></Image>
            <div className="level">
              Saul Goodman<br></br>
              Criminal Lawyer<br></br>
              Level : 80
              <Link href="/library"><div className="library">View Library</div></Link>
            </div>
          </div>

          <div className="biodata">
            <div className="nama">
              Nama :<br></br>
              <div className="box">{user.name}</div>
            </div>
            <div className="nama">
              Email :<br></br>
              <div className="box">{user.email}</div>
            </div>
            <div className="nama">
              PhoneNumber :<br></br>
              <div className="box">-</div>
            </div>
            <div className="nama">
              Date Of Birth :<br></br>
              <div className="box">11/9/2001</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Left;