import React from 'react';
import Link from 'next/link';

const ProductItem = ({ product }) => {
    return (
        <div className='card'>
            <a>
                <img
                    src={product.image}
                    alt={product.phone_name}
                    className="rounded shadow object-cover p-4 w-full"
                />
            </a>
            <div className="flex flex-col items-center justify-center p-5">
                <a>
                    <h2 className="text-lg">{product.phone_name}</h2>
                </a>
                <p className='mb-2'>{product.brand}</p>
                <p className=''>$ {product.price}</p>
                <div className='flex justify-between'>
                    <Link href={`/product/${product.slug}`}>
                        <button className='primary-button m-2' type='button'>
                            Details
                        </button>
                    </Link>
                    <button className='primary-button m-2' type='button'>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;