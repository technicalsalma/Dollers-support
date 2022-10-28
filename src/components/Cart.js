import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineArrowRight } from 'react-icons/ai'

const Cart = () => {
    return (
        <div>
            <div className='bg-white shadow d-flex justify-content-between px-4 rounded'>
                <div className='pr-4 lh-1'>
                    <div className='my-0'>
                        <p className='m-1'>Apple</p>
                        <p><small>Unit 1kg</small></p>
                    </div>
                    <div>
                        <p className='m-1'>Rs 250</p>
                        <p><small>In stock</small></p>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <p><AiFillMinusCircle /></p>
                    <p className='px-4'>3</p>
                    <p className='text-primary'><AiFillPlusCircle /></p>
                </div>

                <div className='d-flex flex-column justify-content-center'>
                    <h4>Total</h4>
                    <p>Rs 750</p>
                </div>
            </div>
            <div className='bg-white shadow d-flex justify-content-between px-4 mt-2 rounded'>
                <div className='pr-4 lh-1'>
                    <div className='my-0'>
                        <p className='m-1'>Apple</p>
                        <p><small>Unit 1kg</small></p>
                    </div>
                    <div>
                        <p className='m-1'>Rs 250</p>
                        <p><small>In stock</small></p>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <p ><AiFillMinusCircle /></p>
                    <p className='px-4'>3</p>
                    <p className='text-primary'><AiFillPlusCircle /></p>
                </div>

                <div className='d-flex flex-column justify-content-center'>
                    <h4>Total</h4>
                    <p>Rs 750</p>
                </div>
            </div>
            <div className='bg-white shadow d-flex justify-content-between px-4 mt-2 rounded'>
                <div className='pr-4 lh-1'>
                    <div className='my-0'>
                        <p className='m-1'>Apple</p>
                        <p><small>Unit 1kg</small></p>
                    </div>
                    <div>
                        <p className='m-1'>Rs 250</p>
                        <p><small>In stock</small></p>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <p><AiFillMinusCircle /></p>
                    <p className='px-4'>3</p>
                    <p className='text-primary'><AiFillPlusCircle /></p>
                </div>

                <div className='d-flex flex-column justify-content-center'>
                    <h4>Total</h4>
                    <p>Rs 750</p>
                </div>
            </div>

            <div className='bg-white mt-2 rounded shadow'>
                <p className='d-flex justify-content-between align-items-center py-2 px-4 '>Add More Details <AiOutlineArrowRight /></p>
            </div>

            <p className='px-4 '>Price Details</p>

            <div className='bg-white shadow rounded px-4 py-2'>
                <div className='d-flex justify-content-between'>
                    <p>TotalMRP</p>
                    <p>Rs 1125</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p>Coveninence Fee</p>
                    <p>Rs 99</p>
                </div>

            </div>

            <div className='bg-white shadow rounded px-4 mb-2 d-flex justify-content-between mt-2'>
                <p>Total Amaount</p>
                <p>Rs 3456</p>
            </div>

            <button style={{ width: '300px' }} className='btn btn-primary'>Place Order</button>
        </div>
    );
};

export default Cart;