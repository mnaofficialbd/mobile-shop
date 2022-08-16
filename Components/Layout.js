import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Layout = ({ title, children }) => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
            <Head>
                <title>{title ? title + ' - Mobile Shop' : 'Mobile Shop'}</title>
                <meta name="description" content="Ecommerce Website" />
                <link rel="icon" href="https://thumbs.dreamstime.com/b/mobile-store-142992150.jpg" />
            </Head>
            <div className='flex min-h-screen flex-col justify-between'>
                <header>
                    <nav className='flex h-12 justify-between shadow-md items-center px-4'>
                        <Link href='/'>
                            <a className='text-lg font-bold'>MOBILE SHOP</a>
                        </Link>
                        <div>
                            <Link href='/'><a className='p-2'>Home</a></Link>
                            <Link href='/about'><a className='p-2'>About</a></Link>
                            <Link href='/cart'><a className='p-2'>Cart</a></Link>
                            <Link href='/login'><a className='p-2'>Login</a></Link>
                        </div>
                    </nav>
                </header>
                <main className='container m-auto mt-4 px-4'>
                    {children}
                </main>
                <footer className='flex justify-center items-center h-10 shadow-inner'>
                <p className=''>Copyright © {year} || All Rights Reserved by Mobile Shop</p>
                </footer>
            </div>
        </>
    );
};

export default Layout;