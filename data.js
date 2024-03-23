import React from "react";
import { useSelector } from "react-redux";

function ProductComponent(props) {
  const products = useSelector((state) => state.allProducts.products);
  const { id, name, category } = products[0];

  return (
    <div className="four wide column">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
