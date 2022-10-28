import React from 'react';
import { AiOutlineHome } from 'react-icons/ai'
import {FiFileText} from 'react-icons/fi'
import {AiOutlineCreditCard} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'

const Product = () => {
    return (
        <div>
            <div class="container mt-5 mb-5">
                <div class="row row-cols-4">
                    <div class="col text-center">
                        <AiOutlineHome className='fs-2'/>
                        <h4>Home</h4>
                    </div>
                    <div class="col text-center">
                        <FiFileText className='fs-2'/>
                        <h4>Order</h4>
                    </div>
                    <div class="col text-center">
                        <AiOutlineCreditCard className='fs-2'/>
                        <h4>Product</h4>
                    </div>
                    <div class="col text-center">
                        <CgProfile className='fs-2'/>
                        <h4 className='text-success'>Profile</h4>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Product;