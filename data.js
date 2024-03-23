import {createStore,applyMiddleware,compose} from 'redux'
 import rootReducers from './reducers'
 import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const appStore= createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)) )
export default appStore


----------

  import apiCall from "../../apis/apiCall"
import { ActionTypes } from "../constants/action-types"


export const setProducts=(product) =>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:product
    }
}

export const fetchProducts=() =>async(dispatch) =>{
    const response= await apiCall.get('/products')
    dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
}

export const selectedProducts=(product) =>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
------------


 import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import ProductComponent from "./ProductComponent";
import { fetchProducts, setProducts } from "../redux/actions/productActions";
const URL = "https://fakestoreapi.com/products";

function ProductListing(props) {
  const dispatch=useDispatch()



  useEffect(() => {
    dispatch(fetchProducts())
  }, []);
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;


------------

 
