import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

const Main = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
    const product = axios.create({
        baseURL: 'https://dummyjson.com/products',
    })
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const getProducts = () => {
        product.get('?limit=12')
            .then((response) => {
                setProducts(response?.data?.products)
                console.log(response.data.products)
            })
            .catch((error) => {
                console.log()
            })
    }
    useEffect(() => {
        getProducts()
    }, []);
    const deleteProduct = async (id) => {
        product.delete(`/${id}`)
            .then((response) => {
                getProducts
            })
    }

    const searchProducts = (e) => {
        const value = e.target.value
        console.log(value)
        product.get(`/search?q=${value}`)
        .then((response) => {
            setProducts(response?.data?.products)
        })
    }

    return (
        <div className='mainContainer'>
            <div className='productsPara'>
                <div className='search'>
                    <input type="text" placeholder="search" onKeyUp={searchProducts} className="txtsrch" />
                </div>
                <div>
                    <button type='submit' className="add-btn" onClick={() => navigate('/createpdt')}>Add</button>
                </div>
            </div>

            <Slider {...settings}>
                <div className='row'>
                    <div className="products" >
                        {products && products.map((product) => {
                            return (
                                <div className='content'>
                                    <div className="articlesInfo" key={product.id}>
                                        <div className="productImages">
                                            {/* {product.images.map((image) => {
                                                return <img src={image} alt="" />
                                            })
                                            } */}
                                            <img src={product.images[0]} alt="" />

                                        </div>
                                        <h4 className="product-title">{product.title}</h4>
                                        <p className="">{product.description}</p>
                                        <p className="product-category">Category: {product.category}</p>
                                        <div className='detail'>
                                            <p className="product-brand">Brand: {product.brand}</p>
                                            <p className="">{product.stock} in stock</p>
                                            <p className="product-rate">Rate: {product.rating}</p>
                                            <p className="product-discountPercentage">Discount: {product.discountPercentage}%</p>
                                        </div>
                                        <p className="product-price">Price: {product.price}$</p>
                                    </div>
                                    <div className="button">
                                        <button type='submit' className="delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
                                        <button type='submit' className="edit-btn" onClick={() => navigate(`/edit/${product.id}`)}>Edit</button>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </Slider>
        </div>

    )

}
export default Main;