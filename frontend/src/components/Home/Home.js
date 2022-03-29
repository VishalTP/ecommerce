import React, { useEffect } from 'react'
import { CgMouse } from "react-icons/all"
import './Home.css'
import ProductCard from './ProductCard.js'
import MetaData from '../layout/MetaData'
import { getProduct } from '../../actions/productAction'
import { useSelector, useDispatch } from "react-redux"
import Loader from '../loader/Loader'


// const products = [{
//     name: "Tshirt",
//     images:[{url:"https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg"}],
//     price: "$400",
//     _id: "123abc"
// }]
const Home = () => {
    const dispatch = useDispatch()
    const { loading, products, productsCount, error } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(getProduct())
        window.scroll(0, 0)
    }, [dispatch])


    return (
        <>
            {
                loading ? <Loader />
                    :
                    <>
                        <MetaData title="ECOMMERCE" />
                        <div className="banner">
                            <p>Welcome to Ecommerce</p>
                            <h1>FIND AMAZING PRODUCTS BELOW</h1>

                            <a href="#container">
                                <button>
                                    Scroll <CgMouse />
                                </button>
                            </a>
                        </div>

                        <h2 className="homeHeading">Featured Products</h2>

                        <div className="container" id="container">
                            {
                                products && products.map(product => <ProductCard key={product._id} {...product} />)
                            }
                        </div>
                    </>
            }
        </>
    )
}

export default Home