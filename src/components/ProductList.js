import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';

export class ProductList extends Component {
  state = {
    products: []
  };
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Latest" title="Products" />
            <div className="row">F to pay Respects</div>
            <Product />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
