import Link from 'next/link';
import React, { useContext } from 'react';
import Layout from '../Components/Layout';
import { Store } from '../utils/Store';

const CartScreen = () => {

    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    return (
        <Layout title='Shopping Cart'>
            <h1 className="mb-4 text-xl">Shopping Cart</h1>
            {
                cartItems.length === 0 ?
                    (<div>
                        Cart is Empty. <Link href='/'>Go Shopping</Link>
                    </div>) :
                    (
                        <div className="grid md:grid-cols-4 md:gap-5">
                            <div className="overflow-x-auto md:col-span-3">
                                <table className='min-w-full'>
                                    <thead className="border-b">
                                        <tr>
                                            <th className="px-5 text-left">Item</th>
                                            <th className="p-5 text-right">Quantity</th>
                                            <th className="p-5 text-right">Price</th>
                                            <th className="p-5">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.slug} className="border-b">
                                                <td>
                                                    <Link href={`/product/${item.slug}`}>
                                                        
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
            }
        </Layout>
    );
};

export default CartScreen;