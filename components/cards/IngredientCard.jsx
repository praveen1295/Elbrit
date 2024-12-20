import React from "react";
import Image from "next/image";

const IngredientCard = ({ imageUrl, title, description }) => {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[280px] h-[160px] sm:h-[160px] md:h-[180px] lg:h-[180px] rounded-lg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Card Background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-3 sm:p-4 md:p-5 flex flex-col justify-end h-full text-white">
        <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
};

export default IngredientCard;
