import React from 'react';
import './Appointment.css';
import doctor from '../../../images/doctor.png';

const Appointment = () => {
    return (
        <section className='make-appointment mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 d-none d-md-block'>
                        <img src={doctor} alt=""/>

                    </div>
                    <div className='py-5 col-md-7'>
                        <h5 style={{color: '#1CC7C1'}}>APPOINTMENT</h5>
                        <h1 className='text-white'>Make an appointment<br></br>Today</h1>
                        <p className='text-white mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat fuga ab laudantium nemo repellendus reiciendis labore aut magni totam!</p>

                        <button className='appointmentButton mt-5'>Learn More</button>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default Appointment;