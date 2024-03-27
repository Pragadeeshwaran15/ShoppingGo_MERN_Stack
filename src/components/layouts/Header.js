import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import {useDispatch, useSelector} from 'react-redux';
import { Dropdown, Image} from 'react-bootstrap';
import { logout } from '../../actions/userActions';
import avatars from '../../assets/default_avatar.png'

export default function Header () {
    const { isAuthenticated, user } = useSelector(state => state.authState);
    const { items:cartItems } = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logout);
    }


    return (
    <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/" className='heading_name'>
              <h1>ShoppingGo <i class="fa-solid fa-cart-shopping"></i></h1>
            </Link>
            </div>
        </div>
  
        <div className="col-12 col-md-6 mt-2 mt-md-0">
           <Search/>
        </div>
  
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          { isAuthenticated && user ? 
            (
              <Dropdown className='d-inline' >
                  <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
                    <figure className='avatar avatar-nav'>
                      <Image width="50px" src={user && user.avatar ? user.avatar : avatars}  className='profile_avatar'/>
                    </figure>
                    <span>{user && user.name?user.name:null}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  {user.role === 'seller' && <Dropdown.Item onClick={() => navigate('/seller/dashboard')} className='text-dark'>Dashboard</Dropdown.Item>}
                      { user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}} className='text-dark'>Dashboard</Dropdown.Item> }
                      <Dropdown.Item onClick={() => {navigate('/myprofile')}} className='text-dark'><i class="fa-solid fa-user"></i> Profile</Dropdown.Item>
                      {user.role==='admin'?null:<Dropdown.Item onClick={() => {navigate('/orders')}} className='text-dark'><i class="fa-solid fa-box-open"></i> Orders</Dropdown.Item>}
                      <Dropdown.Item onClick={logoutHandler} className='text-danger'><i class="fa-solid fa-right-from-bracket"></i> Logout</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            )
          
          :
            <Link to="/login"  className="btn" id="login_btn">Login</Link>
          }
          <Link to="/cart" className='cart'><span id="cart" className="ml-3">Cart <i class="fa-solid fa-cart-arrow-down"></i></span></Link>
          <span className="ml-1" id="cart_count">{cartItems.length}</span>
          {isAuthenticated && user.role !=='admin'?<Link to="/seller/register" className='carts'><span id="carts" className="ml-3"><i class="fa-solid fa-store"></i></span></Link>:null}
          
          
        </div>
    </nav>
    )
}