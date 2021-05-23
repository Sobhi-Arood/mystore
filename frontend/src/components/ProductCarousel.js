import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Carousel,
  Col,
  Container,
  Image,
  Jumbotron,
  Media,
  Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { listTopProducts } from '../actions/productActions';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  const divStyle = (src) => ({
    height: 400,
    backgroundImage: 'url(' + src + ') no-repeat center center/cover',
  });

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <Jumbotron className='mb-0' fluid>
        <Container className='px-0'>
          <div className='w-50 py-5 text-center mx-auto'>
            <h1 className='text-uppercase font-weight-bold text-white text-center'>
              Shopping ease
            </h1>
            <p className='text-white text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea harum nam illum.
            </p>
            <Button className='text-uppercase text-center px-3' variant='light'>
              shop now
            </Button>
          </div>
        </Container>
      </Jumbotron>
      {/* <Carousel pause='hover' style={{ height: 400 }}>
        {products.map((product) => (
          <Carousel.Item
            key={product._id}
            className='py-5'
            style={divStyle(product.image)}
          >
            {/* <Link to={`/product/${product._id}`}> */}
      {/* <img
              src={product.image}
              alt={product.name}
              className='d-block w-100'
              style={{ objectFit: 'contain' }}
            /> */}
      {/* <Image src={product.image} alt={product.name} fluid /> */}
      {/* <Carousel.Caption className='carousel-caption'>
              <Container>
                <Jumbotron className='bg-transparent text-left py-5'>
                  <h1 className='text-dark font-weight-bold'>{product.name}</h1>
                  <h3 className='mb-3'>{product.price} AED</h3>
                  <Button className='text-uppercase px-3' variant='primary'>
                    shop now
                  </Button>
                </Jumbotron>
              </Container>
            </Carousel.Caption> */}
      {/* </Link> */}
      {/* </Carousel.Item> */}
      {/* // ))} */}
      {/* // </Carousel> */}
      <div className='border-top bg-light mb-5 py-4'>
        <Container>
          <Row>
            <Col className='d-flex px-auto'>
              <Media className='align-items-center justify-content-center mx-auto'>
                <i className='fas fa-truck-moving fa-2x mr-3'></i>
                <Media.Body>
                  <h6 className='text-uppercase font-weight-bold mb-0'>
                    Free shipping & return
                  </h6>
                  <p className='mb-0'>Lorem ipsum, dolor.</p>
                </Media.Body>
              </Media>
            </Col>
            <Col className='d-flex px-auto'>
              <Media className='align-items-center justify-content-center mx-auto'>
                <i className='fas fa-dollar-sign fa-2x mr-3'></i>
                <Media.Body>
                  <h6 className='text-uppercase font-weight-bold mb-0'>
                    Money back guarantee
                  </h6>
                  <p className='mb-0'>Lorem ipsum, dolor.</p>
                </Media.Body>
              </Media>
            </Col>
            <Col className='d-flex px-auto'>
              <Media className='align-items-center mx-auto justify-content-center'>
                <i className='fas fa-headset fa-2x mr-3'></i>
                <Media.Body>
                  <h6 className='text-uppercase font-weight-bold mb-0'>
                    online support 24/7
                  </h6>
                  <p className='mb-0'>Lorem ipsum, dolor.</p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductCarousel;
