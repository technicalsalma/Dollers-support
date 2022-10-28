import React from 'react'
import {Carousel} from 'react-bootstrap'
import profile_picture from '../assets/images/profile.jpg'


const Carousels = () => {
    return (
      <>
    <Carousel indicators={false}>
      <Carousel.Item>
        <img
          className=" design d-block w-100 "
          src="https://images.everydayhealth.com/images/apples-101-about-1440x810.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className=" design d-block w-100 "
          src="https://static-bebeautiful-in.unileverservices.com/1200/900/Heres-why-green-apple-is-the-super-fruit-you-need_mobilehome.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className=" design d-block w-100"
          src="https://w0.peakpx.com/wallpaper/182/615/HD-wallpaper-fruits-apple-fruit.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className='address-bar'>
                <div>
                    <img className='address-img' src={profile_picture} alt=''></img>
                </div>
                <div>
                    <h4 className='addres-title mt-4'>Shop id: <span className='text-success'>123456</span></h4>
                </div>
            </div>
    </>
    );
};

export default Carousels;