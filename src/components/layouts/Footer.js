import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';


export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ backgroundColor: '#232f3e', color:'white'}}>
        <div className='me-lg-5'>
          <span><b>Connected with us on social networks : </b></span>
        </div>
        <div>
          <a href='' className='me-4 text-reset' style={{ fontSize: '20px' }} target='_blank'>
          <i class="fa-brands fa-youtube"></i>
          </a>
          <a href='' className='me-4 text-reset' style={{ fontSize: '20px' }} target='_blank'>
          <i class="fa-brands fa-instagram"></i>
          </a>
          <a href='' className='me-4 text-reset' style={{ fontSize: '20px' }} target='_blank'>
          <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href='' className='me-4 text-reset' style={{ fontSize: '20px' }} target='_blank'>
          <i class="fa-brands fa-facebook"></i>
          </a>
        </div>
      </section>

      <section className="py-3">
        <div className="container" style={{ marginTop: '20px' }}>
          <div className="row">
            <div className="col-md-4 col-lg-6 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#2F4F4F'}}>
                ShoppingGO
              </h6>
              <p>ShoppingGo is your one-stop destination for all things Laptops, Moblies, and Watches. Discover the latest trends, shop from top brands, and enjoy a seamless shopping experience.</p>
            </div>

            

            <div className="col-md-4 col-lg-6 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#2F4F4F' }}>Contact</h6>
              <p>
              <i class="fa-solid fa-location-crosshairs"></i> &nbsp; Perambalur - 621212.
              </p>
              <p style={{ whiteSpace: 'nowrap' }}>
              <i class="fa-solid fa-envelope"></i>&nbsp; shoppinggo@gmail.com
              </p>
              <p>
              <i class="fa-solid fa-phone"></i>&nbsp; +91 9566649639
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#232f3e', color:'white'}}>
        © 2024 Copyright : &nbsp; 
        <a className='text-reset fw-bold' href='http://localhost:3000/' style={{ textDecoration: 'none' }}>
          ShoppinGo
        </a>
      </div>
    </MDBFooter>
  );
}