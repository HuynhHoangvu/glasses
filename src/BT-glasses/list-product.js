import React, { Component } from 'react'
import Product from './product';
export default class ListProduct extends Component {
  renderProduct = () =>{
    const {listProduct, getDetail} = this.props;
    return listProduct.map((product)=>{
        return(
            <Product key={product.id} product={product} getDetail={getDetail} />
        )
    })
  }
    render() {
    return (
      <div className='row glass-img justify-content-start align-items-center'>
    {this.renderProduct()}        
      </div>
    )
  }
}
