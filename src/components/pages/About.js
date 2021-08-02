import React from 'react';
import pfp from '../../assets/images/cg_profile_pic.png';
export default function About () {
    return (
        <div>
            <h2>About Me</h2>
            <figure>
                        <img id="profile-pic" src={pfp} alt="photo of me"/>
                        <figcaption>Cristina Gorrino | Web Developer</figcaption>
            </figure>
            <p> My name is Cristina Gorrino, and I am an aspiring web developer studying at the UCSD Extension bootcamp. My professional experience includes software QA testing, technical operations, and building financial tech products for customers across the globe.
            </p>
            <p>I am currently based in San Diego after spending 7 years living and working in the San Francisco bay area. Graduate of Stanford University with a B.A. in International Relations.
            </p>
            

        </div>
    )
}