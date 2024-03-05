import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const AddProduct = () => {

    const schema = yup.object().shape({
        image: yup.mixed().required("image is required"),
        title: yup.string().required("Product title is required"),
        price: yup.string().matches().required("Product price is required"),
        stock: yup.string().matches().required("Available stock of products is required"),
        discountPercentage: yup.string().matches().required("Percentage discount of product is required"),
        rating: yup.string().matches().required("Product rating is required"),
        brand: yup.string().required("Product brand is required"),
        category: yup.string().required("Product category is required"),
        description: yup.string().required("Product description is required"),
    })


    const {
        register,
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema)
    });

    const [errorMessage, setErrorMessage] = useState();
    const [showButton, setShowButton] = useState(true);
    
    const [state, setState] = useState({
        image: "",
        title: "",
        price: "",
        stock: "",
        discountPercentage: "",
        rating: "",
        brand: "",
        category: "",
        description: "",
    })
    const handleChange = (values) => {
        const value = values.target.value;
        setState({
            ...state,
            [values.target.name]: value
        });
    };

    const submitProduct = (values) => {
        console.log(values);
        values.preventDefault();
        const userData = {
            image: state.image[0],
            title: state.title,
            price: state.price,
            stock: state.stock,
            discountPercentage: state.discountPercentage,
            rating: state.rating,
            brand: state.brand,
            category: state.category,
            description: state.description,

        }
        setShowButton(false)
        setErrorMessage('')

        axios.post('https://dummyjson.com/products/add', userData)
            .then(response => {
                console.log(response.status, response.data);
                const message = "Product created"
                toast.success(message)
            }).catch((error) => {
                console.log(error)
                const message = "error"
                toast.error(message)
            })
            .finally(() => setShowButton(true));

    }
    const onImageChange = (image) => {
        setImage(image.target.image[0])
    }

    return (

        <>

            <form onSubmit={handleSubmit(submitProduct)}>
                <ToastContainer />
                <div className="product-card">
                <h2> Add New Products </h2> 
                    <div className="error-Message">{errorMessage} </div>
                    <div className="editForm">
                        <div className="mainLeft">
                            <div>
                                <label htmlFor="image">Add Image</label>
                            </div>
                            <div>
                                <input {...register('image')} id='image' type="file" name="image" value={state.image} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="mainRight">
                            <div className='productInfo'>
                                <div>
                                    <label htmlFor="title"> Arcticle Title</label>
                                </div>
                                <div>
                                    <input id='title' {...register('title')} type="text" placeholder="e.g iphone 9 " name="title" title="insert article tilte" value={state.title} onChange={handleChange} />

                                </div>

                                <div>
                                    <label htmlFor="price"> Arcticle Price</label>
                                </div>
                                <div>
                                    <input id='price' {...register('price')} type="number" placeholder="e.g 125" name="price" title="insert article price" value={state.price} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="stock"> Stock</label>
                                </div>
                                <div>
                                    <input id='stock'{...register('stock')} type="number" placeholder="e.g 20" name="stock" title="insert stock available" value={state.stock} onChange={handleChange} />
                                </div>

                                <div>
                                    <label htmlFor="discountPercentage"> Arcticle Discount</label>
                                </div>
                                <div>
                                    <input id='discountPercentage' {...register('discountPercentage')} type="number" placeholder="e.g 12" name="discountPercentage" title="insert article discount percentage" value={state.discountPercentage} onChange={handleChange} />
                                </div>

                                <div>
                                    <label htmlFor="rating"> Arcticle Rating</label>
                                </div>
                                <div>
                                    <input id='rating'{...register('rating')} type="number" placeholder="e.g 3" name="rating" title="insert article rating" value={state.rating} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="brand"> Brand</label>
                                </div>
                                <div>
                                    <input id='brand'{...register('brand')} type="string" placeholder="e.g zara" name="brand" title="insert article Brand" value={state.brand} onChange={handleChange} />
                                </div>

                                <div>
                                    <label htmlFor="category"> Arcticle category</label>
                                </div>
                                <div>
                                    <input id='category'{...register('category')} type="string" placeholder="e.g raincoat" name="category" title="insert article category" value={state.category} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="description"> Description</label>
                                </div>
                                <div>
                                    <textarea id='description'{...register('description')} type="text" title="insert article description" value={state.description} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="btn-submit">
                                <button type="submit">
                                    {showButton === false && <div className='attente'>saving...</div>}
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
export default AddProduct;