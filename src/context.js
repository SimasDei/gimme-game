import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

/**
 * @context - init Context API
 */
const ProductContext = React.createContext();

export class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct
  };
  handleDetail = () => console.log('Ahoy Detail o/');
  addToCart = () => console.log('Ahoy Add to Cart o/');

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
