import React from 'react';
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-footer text-white mt-5'>
      <Container>
        <Row className='py-5'>
          <Col>
            <h6 className='text-uppercase font-weight-bold mb-4'>about us</h6>
            <p className='text-muted'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              magnam officia deserunt dignissimos maxime impedit nostrum fuga
              voluptas perferendis magni atque, a iste quod officiis cupiditate
              quisquam illum, vero aliquid?
            </p>
          </Col>
          <Col>
            <h6 className='text-uppercase font-weight-bold mb-4'>need help</h6>
            <Nav className='flex-column' variant='light'>
              <LinkContainer to='/'>
                <Nav.Link className='px-0'>Help & FAQs</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link className='px-0'>Order Tracking</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link className='px-0'>Shipping & Delivery</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link className='px-0'>My Orders</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link className='px-0'>My Account</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link className='px-0'>About us</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link className='px-0'>Privacy</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
          <Col>
            <h6 className='text-uppercase font-weight-bold mb-4'>
              contact info
            </h6>
            <div className='d-flex flex-column my-3'>
              <p className='text-dark text-uppercase mb-0'>address:</p>
              <p className='text-muted font-weight-light mb-0'>
                123 street, sharjah, UAE
              </p>
            </div>
            <div className='d-flex flex-column my-3'>
              <p className='text-dark text-uppercase mb-0'>phone:</p>
              <p className='text-muted font-weight-light mb-0'>
                +971 55 9050356
              </p>
            </div>
            <div className='d-flex flex-column my-3'>
              <p className='text-dark text-uppercase mb-0'>email:</p>
              <p className='text-muted font-weight-light mb-0'>
                mail@example.com
              </p>
            </div>
            <div className='d-flex flex-column my-3'>
              <p className='text-dark text-uppercase mb-0'>
                working days/hours:
              </p>
              <p className='text-muted font-weight-light mb-0'>
                Mon - Sun / 9:00 AM - 8:00 PM
              </p>
            </div>
          </Col>
          <Col>
            <h6 className='text-uppercase font-weight-bold mb-4'>
              subscribe newsletter
            </h6>
            <p className='text-muted font-weight-light mb-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus.
            </p>
            <Form className='mt-4'>
              <Form.Group className='border-0'>
                <Form.Control
                  className='bg-light'
                  type='email'
                  placeholder='Enter email'
                />
              </Form.Group>
              <Button variant='info' type='submit'>
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className='bg-darker py-4'>
        <Container>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='text-muted font-weight-light mb-0'>
              &copy; MyStore 2021. All Rights Reserved
            </p>
          </div>
        </Container>
      </div>
    </footer>
    // <footer>
    //   <Container>
    //     <Row>
    //       <Col className='text-center py-3'>Copyright &copy; MyStore</Col>
    //     </Row>
    //   </Container>
    // </footer>
  );
};

export default Footer;
