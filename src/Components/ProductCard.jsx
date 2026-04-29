import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCartPlus, FaStar } from 'react-icons/fa';

const ProductCard = ({product}) => {

    // console.log(product.image)

    return (
        <Card className="bg-[#F6E6B4] shadow-lg rounded-3xl ">
      <div className="space-y-5 mt-5">
        <div className="flex items-center relative aspect-square w-full justify-center ">
          <Image src={product.image} fill alt="product" className="rounded-2xl object-cover"/>

          <Chip className="absolute bg-orange-500 text-white right-2 top-2">{product.category}</Chip>
        </div>


        <h2 className='text-2xl font-bold text-orange-800'>{product.name}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>

        <div className='flex justify-between'>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 flex items-center gap-3">  <span className='text-black'><FaStar /></span><span className='text-black font-bold'>{product.rating}</span>/  5</p>
        </div>
        

        <div className="flex items-center justify-between gap-4">
            <Link href={`/products/${product.id}`}>  <Button variant="outline" className="w-full hover:bg-orange-600 hover:text-white hover:font-bold">View Details</Button> </Link>
                <Button variant='outline'  className=" hover:bg-orange-600 hover:text-white hover:font-bold">Add to Cart<FaCartPlus></FaCartPlus></Button>
        </div>
      </div>
    </Card>
    );
};

export default ProductCard;