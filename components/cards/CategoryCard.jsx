import Image from "next/image";
import React from "react";

const CategoryCard = () => {
  const cardData = [
    {
      id: 1,
      image: "/path-to-image-1.jpg", // Replace with actual image path
      title: "Clinically Studied",
      subtitle:
        "We have a wide selection of vegetarian products to meet your needs. Shop local and explore health products made right here in India.",
    },
    {
      id: 2,
      image: "/path-to-image-2.jpg", // Replace with actual image path
      title: "No Risk GMO Free",
      subtitle:
        "We ensure that all products are safe and within their use-by date. Natural, no modified products, and clinically studied.",
    },
    {
      id: 3,
      image: "/path-to-image-3.jpg", // Replace with actual image path
      title: "Lab Tested",
      subtitle:
        "All products that we offer have undergone lab and safety tests.",
    },
    {
      id: 4,
      image: "/path-to-image-4.jpg", // Replace with actual image path
      title: "Free Shipping",
      subtitle:
        "We deliver to your door with no shipping costs on your orders.",
    },
    {
      id: 5,
      image: "/path-to-image-5.jpg", // Replace with actual image path
      title: "Better Ingredients",
      subtitle: "Natural derivatives for those who need it.",
    },
  ];

  return (
    <div
      style={{ backgroundColor: "#0A414E" }}
      className="relative w-full md:w-3/4 h-auto max-h-[64vh] rounded-lg shadow-lg flex items-center justify-center z-20 p-4 overflow-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="rounded-xl p-6 flex flex-col items-center bg-transparent mb-8"
          >
            {/* Rounded Image */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-300 -mt-2">
              <Image
                src={card.image}
                alt={card.title}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            {/* Heading */}
            <h4 className="mt-4 text-md text-white">{card.title}</h4>

            {/* Subheading */}
            <p className="mt-2 text-xs text-gray-300 text-center">
              {card.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
