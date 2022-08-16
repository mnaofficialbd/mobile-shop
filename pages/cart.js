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
                cartItems.length ===0 ? 
                (<div>
                    Cart is Empty. <Link href='/'>Go Shopping</Link>
                </div>) :
                (
                    <div className="grid md:grid-cols-4 md:gap-5">
                        
                    </div>
                )
            }
        </Layout>
    );
};

export default CartScreen;