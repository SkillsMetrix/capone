import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import { selectedProducts } from "../redux/actions/productActions";
const URL = "https://fakestoreapi.com/products/";
function ProductDetail(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { id, title, category, image, price, description } = product;

  const { productId } = useParams();
  console.log(productId);

  const fetchProduct = async () => {
    const response = await axios.get(`${URL}/${productId}`).catch((err) => {
      console.log(err);
    });
    console.log(response.data);
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>Loading.....!</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
