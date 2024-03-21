import React, {useEffect,useState}from 'react'
import Table from 'react-bootstrap/Table';
import Sidebar from "./Sidebar"
import axios from 'axios';
export default function SellerAll() {
  let [data,setData]=useState()

   const getSellerRequest=async()=>{
     try {
       let res=await axios.get('https://main-back-end.onrender.com/api/v1/seller/all',{
        headers:{
            authorization:localStorage.getItem('token')
        }
    })
 
       if(res.status===200){
         setData(res.data.sellers.filter(e=>e.status))
       }
     } catch (error) {
       
     }
 
   }
   useEffect(()=>{
    getSellerRequest()
   },[])

  return (
    <div className="row">
    <div className="col-12 col-md-2">
            <Sidebar/>
    </div>
    <div className="col-12 col-md-10">
        <h1>Our Seller's</h1>
        <div className="table">
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Shop Name</th>
          <th>Brand</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Country</th>
          <th>State</th>
          <th>City</th>
          <th>Pin code</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.map((e,i)=>{
            return <tr key={i}>
                <td>{i+1}</td>
                <td>{e.shopname}</td>
                <td>{e.brand}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.address}</td>
                <td>{e.country}</td>
                <td>{e.state}</td>
                <td>{e.city}</td>
                <td>{e.pincode}</td>
            </tr>
          })
        }
      </tbody>
    </Table>
        </div>
    </div>
    </div>
  )
}

