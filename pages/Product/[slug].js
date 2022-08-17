// import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Layout from '../../Components/Layout';
import data from '../../utils/data';
import { Store } from '../../utils/Store';

const ProductScreen = () => {
    const router = useRouter();
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find(x => x.slug === slug);
    if (!product) {
        return <div>Product Not Found</div>
    }
    const { state, dispatch } = useContext(Store);

    const addToCartHandler = () => {
        const existItem = state.cart.cartItems.find((x) => x.slug === slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;

        if (product.countInStock < quantity) {
            alert('Product stock is not available')
            return;
        }

        dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
        router.push('/cart');
    }

    return (
        <Layout title={product.phone_name}>
            <div className="py-2">
                <Link href='/'>Back to product</Link>
            </div>
            <div className="grid md:grid-cols-4 md:gap-3">
                <div className="md:col-span-2">
                    <img
                        src={product.image}
                        alt={product.phone_name}
                        height={500}
                        width={500}
                        layout='responsive' />
                    {/* <Image
                        src={product.image}
                        alt={product.phone_name}
                        height={640}
                        width={640}
                        layout='responsive'
                    ></Image> */}
                </div>
                <div>
                    <ul>
                        <li><h1 className='text-lg'>{product.phone_name}</h1></li>
                        <li>Category: {product.brand}</li>
                        <li>Brand: {product.slug}</li>
                        <li>$ {product.price}</li>
                        <li>{product.rating} of {product.numReviews} reviews</li>
                        <li>Memory: {product.memory}</li>
                        <li>Release Date: {product.releaseDate}</li>
                        <li>Display Size: {product.displaySize}</li>
                        <li>Storage: {product.storage}</li>
                        <li>{product.chipSet}</li>
                        <li>In Stock: {product.countInStock}</li>
                    </ul>
                </div>
                <div>
                    <div className="card p-5">
                        <div className="mb-2 flex justify-between">
                            <div>Price</div>
                            <div>$ {product.price}</div>
                        </div>
                        <div className="mb-2 flex justify-between">
                            <div>Status</div>
                            <div>$ {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}</div>
                        </div>
                        <button className="primary-button w-full" onClick={addToCartHandler}>Add to cart</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductScreen;