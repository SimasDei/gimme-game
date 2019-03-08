import React, { Component } from 'react';

/**
 * @context - init Context API
 */
const ProductContext = React.createContext();

export class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="Ahoy Context o/">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
