import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, Container } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import mainAd from '../images/ad.jpg';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <>
          <ProductCarousel />
          <Container>
            <Image style={{ height: '100px' }} src={mainAd} alt='sdf' fluid />
          </Container>
        </>
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <Container>
        <Row className='py-5'>
          <Col>
            <hr className='' />
          </Col>
          <Col>
            <h4 className='text-center text-uppercase font-weight-bold'>
              Latest Products
            </h4>
          </Col>
          <Col>
            <hr className='' />
          </Col>
        </Row>
      </Container>
      {/* <h1 className='mt-5'>Latest Products</h1> */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Container>
          <Row>
            {products.map((product) => (
              <Col
                key={product._id}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className='mb-4'
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </Container>
      )}
    </>
  );
};

export default HomeScreen;
