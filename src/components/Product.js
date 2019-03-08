import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { productConsumer } from '../context';
import styled from 'styled-components';

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3" ref={id}>
        <div className="card bg-dark">
          <div className="img-container py-2">
            <Link to="/details" onClick={e => console.log(e.target)}>
              <img src={img} alt={title} className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => console.log('Added to Cart')}
            >
              {inCart ? (
                <p className="mb-0" disabled>
                  In Cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">${price.toFixed(2)}</span>
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
  }
  &:hover {
    .card {
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
      transform: scale(1.05);
    }
    .card-footer {
      background: var(--mainBlue);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    .card-img-top {
      transform: scale(0.9);

      transition: all 0.3s linear;
    }

    &:hover .card-img-top {
      transform: scale(1);
    }
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    color: var(--mainWhite);
    border: none;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.3s linear;
    &:hover {
      color: var(--mainBlue);
      background-color: var(--mainWhite);
    }
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
`;

export default Product;
