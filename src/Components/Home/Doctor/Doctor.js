import React from 'react';
import img from '../../../images/doctor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4 style={{color: '#3A4256'}}><b>Dr. Coudi</b></h4>
            <p> <FontAwesomeIcon style={{color: '#1CC7C1'}} icon={faPhoneAlt}/> +6747474747</p>
        </div>
    );
};

export default Doctor;
