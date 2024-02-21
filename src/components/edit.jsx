import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { useParams, useSearchParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Edit = () => {

    const schema = yup.object().shape({
        // image: yup.any().image().required("image is required"),
        name: yup.string().required("Product Name is required"),
        price: yup.string().matches().required("Poduct price is required")
    }).required()

    const [product, setProduct] = useState();
    const [errorMessage, setErrorMessage] = useState()
    const [showButton, setShowButton] = useState(true)
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });
    const searchParams = useParams()
    console.log(searchParams.id)
    // const client = axios.create({
    //     baseURL: 'https://dummyjson.com/products'
    // });

    const getProduct = () => {
        axios.get(`https://dummyjson.com/products/${searchParams.id}`)
            .then((response) => {
                setProduct(response?.data)
                setValue("name", response?.data?.title)
                setValue("price", response?.data?.price)
                setValue("category", response?.data?.category)
                setValue("rating", response?.data?.rating)
                setValue("description", response?.data?.description)
                setValue("stock", response?.data?.stock)
                setValue("discountPercentage", response?.data?.discountPercentage)
                // console.log(response)
            }).catch((error) => {
                console.log()
            });
    }
    useEffect(() => {
        getProduct()
    }, []);

    const editProduct = (value) => {
        setShowButton(false)
        setErrorMessage('')
        axios.put(`https://dummyjson.com/products/${searchParams.id}`, {
            Image: value.image,
            title: value.title,
            price: value.price,
            brand: value.brand,
            description: value.description,
            category: value.category,
            rating: value.rating,
            stock: value.stock,
            discountPercentage: value.discountPercentage,
        })
            .then(response => {
                console.log(response)
                const message = "Edited product"
                toast.success(message)
            })
            .catch((error) => {
                console.log(error)

                if (error?.code === "ERR_NETWORK") {
                    setErrorMessage("Error network")
                    toast.error(error.message)
                }
            }).finally(() => setShowButton(true));

    }

    return (
        <>
            <form onSubmit={handleSubmit(editProduct)}>
                <ToastContainer />
                <div className="product-card" key={product?.id}>
                    <h2> Edit Product </h2>
                    <div className="error-Message">{errorMessage} </div>
                    <div className="editForm" type="datalist" key={searchParams.id}>
                        <div className="mainLeft">
                            <img src={product?.images[0]} />
                        </div>
                        <div className="mainRight">
                            <div className='productInfo'>
                                <div>
                                    <label htmlFor="name"> Arcticle Name</label>
                                </div>
                                <div>
                                    <input id='name'{...register('name')} type="text" placeholder={product?.title} name="name" title="insert article name" />

                                </div>

                                <div>
                                    <label htmlFor="price"> Arcticle Price</label>
                                </div>
                                <div>
                                    <input id='price' {...register('price')} type="number" placeholder={product?.price} name="price" title="insert article price" />
                                </div>
                                <div>
                                    <label htmlFor="stock"> Stock</label>
                                </div>
                                <div>
                                    <input id='stock' {...register('stock')} type="number" placeholder={product?.stock} name="stock" title="insert stock available" />
                                </div>

                                <div>
                                    <label htmlFor="discountPercentage"> Arcticle Discount</label>
                                </div>
                                <div>
                                    <input id='discountPercentage' {...register('discountPercentage')} type="number" placeholder={product?.discountPercentage} name="discount" title="insert article discount percentage" />
                                </div>

                                <div>
                                    <label htmlFor="rating"> Arcticle Rating</label>
                                </div>
                                <div>
                                    <input id='rating' {...register('rating')} type="number" placeholder={product?.rating} name="rating" title="insert article rating" />
                                </div>

                                <div>
                                    <label htmlFor="category"> Arcticle category</label>
                                </div>
                                <div>
                                    <input id='category' {...register('category')} type="string" placeholder={product?.category} name="category" title="insert article category" />
                                </div>
                                <div>
                                    <label htmlFor="description"> Arcticle description</label>
                                </div>
                                <div>
                                    <textarea id='description' {...register('description')} type="string" placeholder={product?.description} name="category" title="insert article description" />
                                </div>
                            </div>
                            <div className="btn-submit">
                                <button type="submit">
                                    {showButton === false && <div className='attente'>editing...</div>}
                                    {showButton === true && <>save</>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Edit;