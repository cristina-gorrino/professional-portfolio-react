import React from 'react';
import pfp from '../../assets/images/cg_profile_pic.png';
export default function About () {
    return (
        <div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={pfp} id="profile-pic" className="d-block mx-lg-auto img-fluid" alt="My profile pic" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Cristina Gorrino</h1>
                        <p className="lead">Full Stack web developer studying at the UCSD Extension bootcamp. Currently based in San Diego, CA.</p>
                        <p >My professional experience includes software QA testing, technical operations, and building financial tech products for customers across the globe.</p>
                        <p>Earned a Certificate from UCSD after completing the Full Stack Bootcamp to learn new skills in web development. I've gained experience with building webpages using HTML, CSS and JavaScript as well as newer technologies like React.js. Built on my provious deep experience with PostgreSQL by building projects using MySQL and MongoDB.</p>
                        <p> Excited to apply my new skills and keep learning more, and confident that my previous experience with testing will help me bring a user-cerntric and empathetic perspective to development work.  </p>
                    </div>
                </div>
            </div>
            

        </div>
    )
}