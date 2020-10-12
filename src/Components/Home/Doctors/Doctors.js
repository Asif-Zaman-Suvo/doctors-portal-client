import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';


const Doctors = () => {

    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])


    return (
        <section style={{marginTop:'10%'}} className="doctors">
        <div className="container">
            <h2 style={{color: '#1CC7C1'}} className="text-center text-uppercase mb-5"><b>Our Doctors</b></h2>
            <div className="row">
                    {
                     doctors.map(doctor =><Doctor key={doctor._id} doctor={doctor}></Doctor>)
                    }
            </div>
        </div>
    </section>
    );
};

export default Doctors;