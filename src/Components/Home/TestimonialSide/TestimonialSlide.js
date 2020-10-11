import React from 'react';

const TestimonialSlide = (props) => {
    const { quote, name, img, from } = props.tst
    return (
        <div className='card shadow-sm'>
            <div className='card-body'>
                <p className='text-secondary card-text text-center'>{quote}</p>

            </div>

            <div className='card-footer d-flex align-items-center'>
                <img className='mx-3' src={img} width="60" alt="" />

                <div>
                    <h6 style={{ color: '#1CC7C1' }}>{name}</h6>
                    <p className='text-dark m-0'>{from}</p>
                </div>

            </div>

        </div>
    );
};

export default TestimonialSlide;