import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='h-100 border-0'>
      <Card.Img variant='top' src={product.image}></Card.Img>
      <Card.Body className='text-center'>
        <Card.Text className='text-muted font-weight-light mb-0'>
          <small>{product.category}</small>
        </Card.Text>
        <Card.Title className='text-capitalize font-weight-bold'>
          {product.name}
        </Card.Title>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text className='font-weight-bold text-dark mt-1'>
          {product.price} AED
        </Card.Text>
        <Link to={`/product/${product._id}`}>
          <Button variant='light'>Shop now</Button>
        </Link>
      </Card.Body>
    </Card>
    // <Card className='my-3 p-3 rounded'>
    //   <Link to={`/product/${product._id}`}>
    //     <Card.Img src={product.image} variant='top' />
    //   </Link>
    //   <Card.Body>
    //     <Link to={`/product/${product._id}`}>
    //       <Card.Title as='div'>
    //         <strong>{product.name}</strong>
    //       </Card.Title>
    //     </Link>
    //     <Card.Text as='div'>
    //       <Rating
    //         value={product.rating}
    //         text={`${product.numReviews} reviews`}
    //       />
    //     </Card.Text>
    //     <Card.Text as='h3'>${product.price}</Card.Text>
    //   </Card.Body>
    // </Card>
  );
};

export default Product;
