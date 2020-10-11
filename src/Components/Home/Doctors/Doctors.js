import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <section style={{marginTop:'10%'}} className="doctors">
        <div className="container">
            <h2 style={{color: '#1CC7C1'}} className="text-center text-uppercase mb-5"><b>Our Doctors</b></h2>
            <div className="row">
                <Doctor/>
                <Doctor/>
                <Doctor/>
            </div>
        </div>
    </section>
    );
};

export default Doctors;