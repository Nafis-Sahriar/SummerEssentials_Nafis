import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({product}) => {

    // console.log(product.image)

    return (
        <Card className="">
      <div className="space-y-5 mt-5">
        <div className="">
          <Image src={product.image} height={300} width={300} alt="product" className="rounded-2xl object-cover"/>

          <Chip className="absolute right-2 top-2">{product.category}</Chip>
        </div>


        <h2>{product.name}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>

        <div className="flex items-center justify-center">
            <Link href={`/products/${product.id}`}>  <Button variant="secondary" className="w-full">View Details</Button> </Link>
          
        </div>
      </div>
    </Card>
    );
};

export default ProductCard;