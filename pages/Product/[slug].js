import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../Components/Layout';
import data from '../../utils/data';

const ProductScreen = () => {
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find(x => x.slug === slug);
    if (!product) {
        return <div>Product Not Found</div>
    }
    return (
        <Layout title={product.phone_name}>
            <div className="py-2">
                <Link href='/'>Back to product</Link>
            </div>
            <div className="grid md:grid-cols-4 md:gap-3">
                <div className="md:col-span-2">
                    <Image
                        src={product.image}
                        alt={product.phone_name}
                        height={640}
                        width={640}
                        layput='responsive'
                    ></Image>
                </div>
                <div>
                    <ul>
                        <li><h1 className='text-lg'>{product.phone_name}</h1></li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default ProductScreen;