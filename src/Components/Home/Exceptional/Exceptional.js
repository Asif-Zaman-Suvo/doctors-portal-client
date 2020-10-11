import React from 'react';
import baby from '../../../images/baby.png'

const Exceptional = () => {
    return (
        <div style={{marginBottom:'12%'}} className='d-flex justify-content-center mt-5'>
            <div className='row w-75 mt-5'>
            <div className='col-md-6 mt-5'>
                <img className='img-fluid' src={baby} alt=""/>
            </div>
            <div className='col-md-6 mt-5 align-self-center'>
                <h1 style={{color:' #3A4256'}}><b>Exceptional Dental <br></br> Care,on Your terms </b></h1>
                <p className='mt-5 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam obcaecati itaque quisquam at earum saepe impedit officia! Omnis maiores numquam quam quisquam! Esse possimus cupiditate, ipsum numquam voluptas consequuntur aliquid. Similique iusto earum, dignissimos dolorem maxime nihil dolorum aliquam hic eius doloribus quae nisi, itaque laboriosam cupiditate officia deserunt!</p>

                <button className='appointmentButton'>Learn More</button>
            </div>
            </div>

            
        </div>
    );
};

export default Exceptional;