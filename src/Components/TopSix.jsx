import React from 'react';
import ProductCard from './ProductCard';

const TopSix = async () => {

    const res = await fetch('https://summer-essentials-nafis.vercel.app/data.json');
    const data = await res.json();

    console.log(data);
    return (
        <div className='w-[90%] mx-auto mt-20 mb-20'>

            <div>
                <h1 className='text-3xl text-center  text-orange-600 font-bold '>Featured Products</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border'>
                    {
                        data.slice(0, 6).map((item) => <ProductCard key={item.id} product={item} />)
                    }
                </div>


            </div>
            
        </div>
    );
};

export default TopSix;