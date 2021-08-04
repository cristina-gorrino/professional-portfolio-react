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
                        <p className="lead">Full Stack web developer studying at the UCSD Extension bootcamp</p>
                        <p className="lead">My professional experience includes software QA testing, technical operations, and building financial tech products for customers across the globe.</p>
                        <p>I am currently based in San Diego after spending 7 years living and working in the San Francisco bay area. Graduate of Stanford University with a B.A. in International Relations.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}