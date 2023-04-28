import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import dataAfrica from "../../data/DataAfrica";

class Africa extends React.Component {
  constructor(props) {
      super(props)
      this.state = {data: dataAfrica}
  }

  // check if data is a valid json
  isJsonString(str) {
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;
  }

  getProducts(items) {
      let products = JSON.parse(items)
      return products.map((product) => {
          return <Product data={product} key={product.name} />
      })
  }

  render() {
      return (<div className="product">
          
          {this.isJsonString(this.state.data) &&
          <div className="product-list" id="product">
              {this.getProducts(this.state.data)}
        </div>}
          
      </div>
      )
  }
}

export default Africa