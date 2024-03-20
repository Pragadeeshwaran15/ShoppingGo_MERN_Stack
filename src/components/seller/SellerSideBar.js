import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
function SellerSideBar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                <li>
                    <Link to="/seller/dashboard"><i class="fa-solid fa-chalkboard-user"></i> Dashboard</Link>
                </li>
                <hr />
                <li>
                    <NavDropdown title={
                        <i className='fa fa-product-hunt'> Product</i>
                    }>
                        <NavDropdown.Item  onClick={() => navigate('/seller/products')} > <i class="fa-solid fa-person-dots-from-line"></i> All Products</NavDropdown.Item>
                        <NavDropdown.Item  onClick={() => navigate('/seller/products/create')} > <i class="fa-regular fa-square-plus"></i> Create</NavDropdown.Item>
                    </NavDropdown>
                </li>

        
            </ul>
            </nav>
        </div>
  )
}

export default SellerSideBar
