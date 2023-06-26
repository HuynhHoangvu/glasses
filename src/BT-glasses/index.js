import React, { Component } from 'react'
import data  from './dataGlasses.json'
import Header from './Header'
import ListProduct from './list-product';
export default class Glassess extends Component {
    constructor(props){
        super(props);
        this.state = {
          listGlass :data,
          productDetail:data[0]
        } 
    }
    changeGlasses=(product)=>{
        this.setState({
            productDetail:product
        })
    }
    
    render() {
        const{productDetail} = this.state
    return (
      <div className='boday'>
        <div className='head'>
        <Header/></div>
        <div className='container'>
            <div className='row pb-5'>
            <div className='position-relative col-sm-6'>
                <img className='img-fluid' src='./img/model.jpg' />
            <div className='product-detail'>
                <h3 className='ml-2'>{productDetail.name}</h3>
                <p className='ml-2'>{productDetail.desc}</p>
            </div>
            <div className='product-glass'>
                <img src={productDetail.url} alt=''/>
            </div>
            </div><div className="col-sm-6">

<img className='img-fluid' src="./img/model.jpg" alt="model" />
</div> 
            </div>
            
            <ListProduct listProduct={this.state.listGlass} getDetail={this.changeGlasses} />
            </div>
      </div>
    )
  }
}
