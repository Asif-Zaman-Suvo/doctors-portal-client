import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
const infosData=[
    {
        title:'Opening hours',
        description:'24 hours and 7 days in a week',
        icon:faClock,
        background:'primary'
    },
    {
        title:'Visit our location',
        description:'Brooklyn,NY 10036,United States',
        icon:faMapMarker,
        background:'dark'
    },

    {
        title:'Contact us now',
        description:'+12345414242',
        icon:faPhone,
        background:'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row ">
            {
                infosData.map(info=><InfoCard info={info}></InfoCard>)
            }
            </div>

        </section>
    );
};

export default BusinessInfo;