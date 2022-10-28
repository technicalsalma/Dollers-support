import React from 'react';
import {FiEdit2} from 'react-icons/fi'



const Address = () => {
    return (
        <div>
            <div className='address-details'>
                <h2 className='addres-title'>Puneet Apple Farm <span><FiEdit2 className='fs-4'/> Edit</span></h2>
                <h5>Puneet Thakur</h5>
                <h5>Phone no.- <span className='text-success'>+91 2345678056</span></h5>
                <h5>Shimlm GPO, near G.P road, shimla</h5>
                <h5>Himachal pardesh</h5>
            </div>
        </div>
    );
};

export default Address;