import React, { Component } from 'react';
import Product from './Product';

export class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>Ahoy ProductList o/</h3>
        <Product />
      </div>
    );
  }
}

export default ProductList;
