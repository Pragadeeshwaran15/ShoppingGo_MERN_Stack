import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { Carousel } from 'react-bootstrap';
import  {toast} from 'react-toastify';
import Pagination from 'react-js-pagination';
import { Link } from "react-router-dom";
import axios from "axios";
export  default function Home(){
    const dispatch = useDispatch();
    const {products, loading, error, productsCount, resPerPage} =    useSelector((state) => state.productsState)
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState(null);
    let[image,setImage]=useState()
    const setCurrentPageNo = (pageNo) =>{

        setCurrentPage(pageNo)
       
    }
    const getadimgae=async()=>{
        try {
            let res=await axios.get('/api/v1/ad/banner') 
            if(res.status===200){
                setImage(res.data.images)
            }
        } catch (error) {
           console.log(error); 
        }
    }
    //catogery function
    const handleCategoryClick = (categoryName) => {
        // Set the selected category when a button is clicked
        setCategory(categoryName);
        // Reset current page to 1 when category changes
        setCurrentPage(1);
    }

    useEffect(()=>{
        getadimgae()
        if(error) {
            return toast.error(error,{
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts(null, null, category, null, currentPage)) 
    }, [error, dispatch, currentPage,category])


    return (
        <Fragment>
          <div className="button d-flex justify-content-around mt-2 ml-3">
            <button type="button" className="Catogery" onClick={()=>handleCategoryClick("Mobile")}>Mobiles</button>
            <button type="button" className="Catogery" onClick={()=>handleCategoryClick("Accessories")}>Accessories</button>
            <button type="button" className="Catogery" onClick={()=>handleCategoryClick("Electronics")}>Electronics</button>
            <button type="button" className="Catogery" onClick={()=>handleCategoryClick("Sports")}>Sports</button>
            <button type="button" className="Catogery" onClick={()=>handleCategoryClick("Laptops")}>Laptops</button>
            <button type="button" className="Catogery" onClick={()=>handleCategoryClick("Headphones")}>Headphone</button>
          </div>
          <div className="col-12 col-lg-12 img-fluid mt-3" id="Adverties">
                        
                        <Carousel pause="hover" className='Carousel'>
                                <Carousel.Item >
                                    <Link onClick={()=>handleCategoryClick("Sports")}><img className="d-block w-100"  src='./images/Banners/MARCH.jpg' alt='banner' height="350" width="500" /></Link>
                                </Carousel.Item>

                                <Carousel.Item >
                                    <Link onClick={()=>handleCategoryClick("Mobile")}><img className="d-block w-100"  src='./images/Banners/moblie.jpg' alt='banner' height="350" width="500" /></Link>
                                </Carousel.Item>

                                <Carousel.Item >
                                <Link onClick={()=>handleCategoryClick("Accessories")}><img className="d-block w-100"  src='./images/Banners/watch.png' alt='banner' height="350" width="500" /></Link>
                                </Carousel.Item>
                        </Carousel>
                    
          </div>
            {loading ? <Loader/>:
                <Fragment>
                    <MetaData title={'Buy Best Products'} />
                    <h1 id="products_heading" className="text-center">Our Products</h1>
                    <section id="products" className="container mt-5">
                        <div className="row">
                            { products && products.map(product => (
                                <Product col={3} key={product._id}  product={product}/>
                            ))}
                        
                        </div>
                    </section>
                    {productsCount > 0 && productsCount > resPerPage?
                    <div className="d-flex justify-content-center mt-5 pagination-container">
                           <Pagination 
                                activePage={currentPage}
                                onChange={setCurrentPageNo}
                                totalItemsCount={productsCount}
                                itemsCountPerPage={resPerPage}
                                nextPageText={'Next'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass={'page-item'}
                                linkClass={'page-link'}
                           />     
                    </div> : null }
                </Fragment>
           }
        </Fragment>
    )
}