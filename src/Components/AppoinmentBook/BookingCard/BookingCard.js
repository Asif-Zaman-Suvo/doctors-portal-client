import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      
    }
   
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 style={{color: '#1CC7C1'}}className="card-title">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} Spaces Available </p>

                    <button onClick={openModal} className='contactButton'>Book Appointment</button>

                    <AppointmentForm date={date} appointmentOn={booking.subject} modalIsOpen={modalIsOpen} closeModal={closeModal}></AppointmentForm>

                   

                </div>
            </div>


        </div>
    );
};

export default BookingCard;