import Image from "next/image";

export default function BannerSlider() {
  const slides = [
    {
      id: 1,
      leftCardTitle: "Card Left 1",
      leftCardContent: "This is the content for the left card of Slide 1.",
      image: "/assets/images/f2-1.png", // Replace with actual image path
      rightCardTitle: "Card Right 1",
      rightCardContent: "This is the content for the right card of Slide 1.",
    },
    // Add more slides as needed
  ];

  return (
    <div className="w-[80%] h-auto py-6">
      <div className="px-4 md:px-8 h-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          {/* Left Card */}
          <div className="w-full md:w-1/3 h-auto p-4 rounded-lg flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              Online Medical Supplies
            </h3>
            <h1 className="text-sm text-gray-600 text-center mt-2">
              Get Your Vitamins & Minerals
            </h1>
            <button className="bg-black text-white text-sm px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 mt-4">
              Get More
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 h-54 md:h-96 relative">
            <Image
              src="/assets/images/f2-1.png.png"
              alt="Slide Image"
              layout="fill"
              className="object-fill"
            />
          </div>

          {/* Right Card */}
          <div className="w-full md:w-1/3 h-auto p-4 rounded-lg flex flex-col justify-start items-center gap-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex items-center w-full gap-4 text-start"
              >
                <div className="w-14 h-14 relative">
                  <Image
                    src=""
                    alt={`Slide ${index}`}
                    layout="fill"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-800">
                    Vitamins
                  </h1>
                  <small className="text-sm text-gray-600">
                    Increased vitamins and minerals in your diet
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
