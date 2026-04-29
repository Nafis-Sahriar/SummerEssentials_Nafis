import React from 'react';

const ProductDetailsPage = async ({params}) => {

    const {id} = await params;

    const res = await fetch('https://summer-essentials-nafis.vercel.app/data.json');
    const data = await res.json();

    const product = data.find(item => item.id === parseInt(id));

    // console.log(product)

    console.log(id);
    return (
        <div>
            <h1>THis is product Details Page, will be developed Later.</h1>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductDetailsPage;