import ProductCard from '@/Components/ProductCard';
import React from 'react';

const ProductsPage = async () => {
    const res = await fetch('https://summer-essentials-nafis.vercel.app/data.json');
    const data = await res.json();

    return (
        <div className='w-[90%] mx-auto mt-15'>

            <h1 className='text-3xl text-center font-bold text-orange-500'> All Products</h1>
            <p className='text-center text-gray-600 mt-4'>
                Explore our full collection of summer essentials, from stylish sunglasses to beach-ready accessories. Find everything you need to make this summer unforgettable!
            </p>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                {data.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;