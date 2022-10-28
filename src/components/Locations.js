import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Location.css'
import {FiEdit2} from 'react-icons/fi'

const Locations = () => {
    return (
    <div className='location'>
    <Container fluid>
    <h2 className='addres-title'>Delivery Locations</h2>
      <Row >
        <Col className='card-location text-success'>+</Col>
        <Col  className='card-location text-success'>171001</Col>
        <Col  className='card-location text-success'>171002</Col>
        <Col  className='card-location text-success'>Shimlm</Col>
      </Row>
      <Row>
        <Col className='card-location text-success'>New Shimla</Col>
       <Col className='card-location text-success'>All Goverment offices in Shimla City</Col>
      </Row>
    </Container>

         {/* Short-Discription */}
    <div>
    <Container fluid  className='mt-4 mb-2 text-secondary'>
      <Row>
        <Col className='addres-title h2'>Shop Discription</Col>
        <Col className='addres-title h2'><span><FiEdit2 className='fs-4'/></span>Edit</Col>
      </Row>
    </Container>
     <p className='card p-3 mt-2 text-secondary'>I'm a organic farmer from vellore, in our farm we are producing sproute coconut or coconut flower, coconut oil and many more things which is having numberous health benefits is currently available at aour farm interested people order us. We don't have any commercial aspects hence we do not added any harmful preservatives or chemicals</p>
    </div>

    </div>
    );
};

export default Locations;