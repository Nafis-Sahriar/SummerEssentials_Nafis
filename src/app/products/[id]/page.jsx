import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://summer-essentials-nafis.vercel.app/data.json",);
  const data = await res.json();

  const product = data.find((item) => item.id === parseInt(id));

  // console.log(product)

  console.log(id);
  return (

    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
       
        <div className="flex items-center relative aspect-square w-full justify-center ">
          <Image
            src={product.image}
            fill
            alt="product"
            className="rounded-2xl object-cover"
          />

          <Chip className="absolute bg-orange-500 text-white right-2 top-2">
            {product.category}
          </Chip>
        </div>

       
        <div className="space-y-6">
         
          

          <h1 className="text-5xl font-bold text-[#5A3E2B]">{product.name}</h1>

          <p className="text-lg text-gray-500"> Brand: <span className="font-semibold">{product.brand}</span></p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl"><FaStar></FaStar></span><span className="font-semibold text-lg">{product.rating}</span></div>

            <div>
              {product.stock > 0 ? (
                <span className="text-green-600 font-bold">
                  In Stock ({product.stock})
                </span>
              ) : (
                <span className="text-red-500 font-bold">Out of Stock</span>
              )}
            </div>

          </div>

       
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-bold text-[#FF7A00]">$ {product.price.toFixed(2)}</h2>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg"> {product.description} </p>

       
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-[#5A3E2B]">
              Available Colors
            </h3>

            <div className="flex flex-wrap gap-3">
              {product.colors?.map((color, index) => (
                <span
                  key={index}
                  className="bg-[#F6E6B4] px-4 py-2 font-bold rounded-full text-sm"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* FEATURES */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-[#5A3E2B]">Features</h3>

            <ul className="space-y-2">

              {product.features?.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700" >
                  <span className="text-green-500"><FaCheck/></span>

                  {feature}

                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">

            <Button className="bg-linear-to-r from-[#F6B73C] via-[#F28C28] to-[#f47215] hover:scale-103  
            hover:from-yellow-500 
            hover:via-orange-600 
            hover:to-red-600 w-full p-7 md:w-auto font-bold text-xl">Add to Cart <FaCartShopping /></Button>

            <Link href="/products">
              <Button className="bg-linear-to-r from-[#F6B73C] via-[#F28C28] to-[#f47215] hover:scale-103  
              hover:from-yellow-500 
              hover:via-orange-600 
              hover:to-red-600 w-full p-7 md:w-auto font-bold text-xl">View Other Products</Button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
