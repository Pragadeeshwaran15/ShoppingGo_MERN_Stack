import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
function SellerRegister() {

let navigate=useNavigate()
const submitHandler=async(e)=>{
try {
    e.preventDefault()
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let res=await axios.post('https://main-back-end.onrender.com/api/v1/seller/register',formProps,{
        headers:{
            authorization:localStorage.getItem('token')
        }
    })
    if(res.status===200){
        navigate('/')
        toast.success("Registeration success check your email",{
            position:"top-center"
          })
    }
    if(res.status===400){
        toast.error("User Already Exists",{
            position:"top-center"
          })
    }
} catch (error) {
    toast.error(error,{
        position:'bottom-center'
      })
}
}
  return (
    <div className="row wrapper mt-5 mb-3">
            <div className="col-10 col-lg-5">
            <form onSubmit={submitHandler} className="shadow-lg loginbr" encType='multipart/form-data'>
                <h1 className="mb-3">Register</h1>

            <div className="form-group">
                <label htmlFor="email_field">Shop Name</label>
                <input name='shopname' type="name" id="name_field" className="form-control" />
            </div>

                <div className="form-group">
                <label htmlFor="email_field">Logged in email Email</label>
                <input
                    type="email"
                    id="email_field"
                    name='email' 
                    className="form-control"
                  
                />
                </div>
    
                <div className="form-group">
                <label htmlFor="password_field">Brand Name</label>
                <input
                    name='brand'
                    type="text"
                    id="password_field"
                    className="form-control"
                  
                />
                </div>

                <div className="form-group">
                <label htmlFor="password_field">Address</label>
                <input
                    name='address'
                    type="text"
                    id="password_field"
                    className="form-control"
                  
                />
                </div>

                <div className="form-group">
                <label htmlFor="password_field">Country</label>
                <input
                    name='country'
                    type="text"
                    id="password_field"
                    className="form-control"
                  
                />
                </div>
                <div className="form-group">
                <label htmlFor="password_field">State</label>
                <input
                    name='state'
                    type="text"
                    id="password_field"
                    className="form-control"
                  
                />
                </div>
                <div className="form-group">
                <label htmlFor="password_field">City</label>
                <input
                    name='city'
                    type="text"
                    id="password_field"
                    className="form-control"
                  
                />
                </div>
                <div className="form-group">
                <label htmlFor="password_field">PIN-Code</label>
                <input
                    name='pincode'
                    type="text"
                    id="password_field"
                    className="form-control"
                  
                />
                </div>
                <div className="form-group">
                <label htmlFor="password_field">Moblie No.</label>
                <input
                    name='phone'
                    type="text"
                    id="password_field"
                    className="form-control"
                  
                />
                </div>
            

    
                <button
                id="register_button"
                type="submit"
                className="btn btn-block py-3"
                >
                REGISTER
                </button>
            </form>
            </div>
        </div>
  )
}

export default SellerRegister
