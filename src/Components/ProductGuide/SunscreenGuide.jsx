import React from "react";

const SunscreenGuide = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-[#FF7A00]">Product Guide</h2>

        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Choose the right sunscreen for your skin and summer activities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          className="
        bg-[#F6E6B4]
        rounded-3xl
        p-8
        shadow-md
        hover:shadow-xl
        transition
        duration-300
      "
        >
          <div className="mb-5">
            <span className="bg-[#FF7A00] text-white px-4 py-2 rounded-full text-sm font-medium">
              SPF 30
            </span>
          </div>

          <h3 className="text-2xl font-bold text-[#5A3E2B] mb-4">
            Daily Protect
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Perfect for regular daily use and short outdoor activities with
            lightweight protection.
          </p>
        </div>

        <div
          className="
        bg-[#F6E6B4]
        rounded-3xl
        p-8
        shadow-md
        hover:shadow-xl
        transition
        duration-300
      "
        >
          <div className="mb-5">
            <span className="bg-[#FF7A00] text-white px-4 py-2 rounded-full text-sm font-medium">
              SPF 50
            </span>
          </div>

          <h3 className="text-2xl font-bold text-[#5A3E2B] mb-4">
            Beach Shield
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Ideal for beach trips, swimming, and long hours under strong
            sunlight.
          </p>
        </div>

        <div
          className="
        bg-[#F6E6B4]
        rounded-3xl
        p-8
        shadow-md
        hover:shadow-xl
        transition
        duration-300
      "
        >
          <div className="mb-5">
            <span className="bg-[#FF7A00] text-white px-4 py-2 rounded-full text-sm font-medium">
              SPF 70
            </span>
          </div>

          <h3 className="text-2xl font-bold text-[#5A3E2B] mb-4">
            Ultra Sun Block
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Designed for extreme summer heat and sensitive skin needing extra
            protection.
          </p>
        </div>

        <div
          className="
        bg-[#F6E6B4]
        rounded-3xl
        p-8
        shadow-md
        hover:shadow-xl
        transition
        duration-300
      "
        >
          <div className="mb-5">
            <span className="bg-[#FF7A00] text-white px-4 py-2 rounded-full text-sm font-medium">
              SPF 100
            </span>
          </div>

          <h3 className="text-2xl font-bold text-[#5A3E2B] mb-4">
            Maximum Defense
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Strongest protection for long outdoor adventures and intense UV
            exposure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SunscreenGuide;
