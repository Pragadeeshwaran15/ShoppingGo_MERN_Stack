import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export default function Sidebar () {

    const navigate = useNavigate();

    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                <li>
                    <Link to="/admin/dashboard"><i class="fa-solid fa-chalkboard-user"></i> Dashboard</Link>
                </li>
        
                <li>
                    <NavDropdown title={
                        <i className='fa fa-product-hunt'> Product</i>
                    }>
                        <NavDropdown.Item  onClick={() => navigate('/admin/products')} ><i class="fa-solid fa-person-dots-from-line"> All</i></NavDropdown.Item>
                        <NavDropdown.Item  onClick={() => navigate('/admin/products/create')} > <i className='fa fa-plus'> Create </i></NavDropdown.Item>
                    </NavDropdown>
                </li>

                <li>
                    <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</Link>
                </li>

                <li>
                    <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                </li>

                <li>
                    <Link to="/admin/reviews"><i class="fa-solid fa-star"></i> Reviews</Link>
                </li>
                <li>
                    <Link to="/admin/seller/request"><i class="fa-solid fa-bell"></i> Seller request </Link>
                </li>
                <li>
                    <Link to="/admin/seller/all"><i class="fa-solid fa-arrow-right-arrow-left"></i>Our Seller </Link>
                </li>
                

        
            </ul>
            </nav>
        </div>
    )
}