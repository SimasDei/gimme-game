import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { productConsumer } from '../context';
import styled from 'styled-components';

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-;g-3 my-3">
        <div className="card">
          <div
            className="img-container py-5"
            onClick={e => console.log(e.target)}
          >
            <Link to="/details">
              <img src={img} alt={title} className="card-img-top" />
            </Link>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
const ProductWrapper = styled.div``;

export default Product;
