import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    const {product,getDetail} = this.props
    return (
      <div className='col-sm-2 mt-4'>
        <a type='button' onClick={()=>{
            getDetail(product)
        }}><img className='img-fluid' src={product.url}alt='' /></a>
      </div>
    )
  }
}
