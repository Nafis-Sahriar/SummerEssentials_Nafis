import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
   <div className="bg-[url('/banner.png')] min-h-[50vh] md:h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg mt-20 shadow-2xl">
 
  <div className="w-full h-full rounded-lg flex items-center ">

    <div className="max-w-7xl px-6 md:px-12 text-white">
   
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 max-w-2xl leading-tight text-center">
        Your Ultimate Summer Store: Everything You Need for the Season!
      </h1>
      
      <p className="text-base md:text-xl mb-8 max-w-xl text-orange-900 text-center mx-auto">
      
        Discover the hottest trends and essentials to make your summer unforgettable.
      </p>

       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/products" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto bg-linear-to-r -top-5 from-orange-700 via-orange-500 to-red-500 p-7 font-bold text-xl hover:from-orange-800 hover:via-orange-600 hover:to-red-600">
            70% OFF Summer Sale!
          </Button>
        </Link>

       
      </div>

    </div>

    
  </div>
</div>
  );
};

export default Banner;