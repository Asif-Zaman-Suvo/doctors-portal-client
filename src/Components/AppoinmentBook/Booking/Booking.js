import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Home/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Booking = () => {

    const [selectedDate,setSelectedDate]=useState(new Date())
    const handleDateChange=date => {
        setSelectedDate(date)
    }
    return (
        <div>
            <NavBar></NavBar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <AvailableAppointment date={selectedDate}></AvailableAppointment>
            <Footer></Footer>
            
        </div>
    );
};

export default Booking;