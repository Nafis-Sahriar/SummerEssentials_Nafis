import React from 'react';

const Tips = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
  
  {/* Section Heading */}
  <div className="text-center mb-14">
    <h2 className="text-5xl font-bold text-[#FF7A00]">
      Summer Tips
    </h2>

    <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
      Stay cool, hydrated, and stylish this summer with these quick seasonal tips.
    </p>
  </div>

  {/* Cards Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-[#F6E6B4] rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-5"></div>

      <h3 className="text-2xl font-bold text-[#5A3E2B] mb-3">
        Stay Hydrated
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Drink plenty of water during hot summer days to keep your body cool and energized.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#F6E6B4] rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-5"></div>

      <h3 className="text-2xl font-bold text-[#5A3E2B] mb-3">
        Protect Your Eyes
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Wear UV-protected sunglasses whenever you are outside under direct sunlight.
      </p>
    </div>


    <div className="bg-[#F6E6B4] rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-5"></div>

      <h3 className="text-2xl font-bold text-[#5A3E2B] mb-3">
        Travel Light
      </h3>

      <p className="text-gray-600 leading-relaxed">
        Carry lightweight clothes and portable essentials for a more comfortable trip.
      </p>
    </div>

  </div>
</div>
    );
};

export default Tips;