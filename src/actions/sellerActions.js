import axios from 'axios';
import {adminOrdersFail, adminOrdersRequest, adminOrdersSuccess, deleteOrderFail, deleteOrderRequest, deleteOrderSuccess, updateOrderFail, updateOrderRequest, updateOrderSuccess } from '../slices/orderSlice';
import { adminProductsRequest, adminProductsSuccess, adminProductsFail } from '../slices/productsSlice';
import {  newProductRequest, newProductSuccess, newProductFail, deleteProductRequest, deleteProductSuccess, deleteProductFail, updateProductRequest, updateProductSuccess, updateProductFail, reviewsRequest, reviewsSuccess, reviewsFail, deleteReviewRequest, deleteReviewSuccess, deleteReviewFail } from '../slices/productSlice';

export const getAdminProducts  =  async (dispatch) => {

    try {  
        dispatch(adminProductsRequest()) 
        const { data }  =  await axios.get(`https://main-back-end.onrender.com/api/v1/seller/products`,{
            headers:{
                authorization:localStorage.getItem('token')
            }
        });
        dispatch(adminProductsSuccess(data))
    } catch (error) {
        //handle error
        dispatch(adminProductsFail(error.response.data.message))
    }
    
}

export const createNewProduct  =  productData => async (dispatch) => {

    try {  
        dispatch(newProductRequest()) 
        const { data }  =  await axios.post(`https://main-back-end.onrender.com/api/v1/seller/product/new`, productData,{
            headers:{
                authorization:localStorage.getItem('token')
            }
        });
        dispatch(newProductSuccess(data))
    } catch (error) {
        //handle error
        dispatch(newProductFail(error.response.data.message))
    }
    
}
export const deleteProduct  =  id => async (dispatch) => {

    try {  
        dispatch(deleteProductRequest()) 
        await axios.delete(`https://main-back-end.onrender.com/api/v1/seller/product/${id}`,{
            headers:{
                authorization:localStorage.getItem('token')
            }
        });
        dispatch(deleteProductSuccess())
    } catch (error) {
        //handle error
        dispatch(deleteProductFail(error.response.data.message))
    }
    
}
export const updateProduct  =  (id, productData) => async (dispatch) => {

    try {  
        dispatch(updateProductRequest()) 
        const { data }  =  await axios.put(`https://main-back-end.onrender.com/api/v1/seller/product/${id}`, productData,{
            headers:{
                authorization:localStorage.getItem('token')
            }
        });
        dispatch(updateProductSuccess(data))
    } catch (error) {
        //handle error
        dispatch(updateProductFail(error.response.data.message))
    }
    
}
export const adminOrders = async(dispatch) => {
    try {
       dispatch(adminOrdersRequest())
       const {data} = await axios.get(`https://main-back-end.onrender.com/api/v1/seller/orders`,{
        headers:{
            authorization:localStorage.getItem('token')
        }
    })
       dispatch(adminOrdersSuccess(data))
    } catch (error) {
        dispatch(adminOrdersFail(error.response.data.message))
    }
}

export const deleteOrder = id => async(dispatch) => {
    try {
       dispatch(deleteOrderRequest())
       await axios.delete(`https://main-back-end.onrender.com/api/v1/seller/order/${id}`,{
        headers:{
            authorization:localStorage.getItem('token')
        }
    })
       dispatch(deleteOrderSuccess())
    } catch (error) {
       dispatch(deleteOrderFail(error.response.data.message))
    }
}

export const updateOrder = (id, orderData)  => async(dispatch) => {
    try {
       dispatch(updateOrderRequest())
       const { data} = await axios.put(`https://main-back-end.onrender.com/api/v1/seller/order/${id}`, orderData,{
        headers:{
            authorization:localStorage.getItem('token')
        }
    })
       dispatch(updateOrderSuccess(data))
    } catch (error) {
       dispatch(updateOrderFail(error.response.data.message))
    }
}
