import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Payment = () => {
    return (
        <div>
            <h2 className='addres-title'>Set Payment Method</h2>
    <Container fluid  className='card shadow-sm p-3  mb-5 bg-body rounded mt-4 mb-2 text-secondary '>
      <Row  className=''>
        <Col>
        <div >
          <h4> UPI Payment </h4>
          <p>uni number- 123568692apl</p>
        </div>
        </Col>
        <Col className='pt-4'>
        <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
       <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
        </Col>
      </Row>
    </Container>
    <Container fluid  className='card shadow-sm p-3  mb-5 bg-body rounded mt-4 mb-2 text-secondary '>
      <Row>
        <Col>
        <div >
          <h4> UPI Payment </h4>
          <p>uni number- 123568692apl</p>
        </div>
        </Col>
        <Col className='pt-4'>
        <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
       <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
        
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Payment;