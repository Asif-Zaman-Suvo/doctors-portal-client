import React from 'react';
import chair from '../../../images/chair.png';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className='col-md-4 offset-md-1'>
                <h1 style={{color:'#203047'}}>Your New Smile<br></br> Starts Here</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis a sit eaque omnis recusandae, nisi consequuntur quia eligendi excepturi?</p>

                <button className='appointmentButton'>GET APPOINTMENT</button>


            </div>
            <div className='col-md-6'>
                <img src={chair} alt="" className='img-fluid'/>

            </div>
    
       </main>
    );
};

export default HeaderMain;

