import CategoryCard from "@/components/cards/CategoryCard";
import IngredientCard from "@/components/cards/IngredientCard";
import LatestNewsCard from "@/components/cards/LatestNewsCard";
import BannerSlider from "@/components/slider";
import React from "react";

const OverlappingContainers = () => {
  return (
    <div className="w-full">
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 mt-4">
        {/* Wrapper for Overlapping Containers */}
        <div className="relative w-full flex flex-col items-center justify-center px-8">
          {/* First Container - 90% of Full Screen Height */}
          <div className="w-full h-[100vh] sm:h-[100vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] bg-blue-200 rounded-lg shadow-lg flex flex-col justify-center items-center z-10 py-6 sm:py-8 md:py-10 px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-950 text-center leading-tight">
              Essential Vitamins
            </h1>
            <BannerSlider />
          </div>

          {/* Second Container Overlapping */}

          <div className="mt-0 sm:-mt-10 md:-mt-14 lg:-mt-18 flex justify-center">
            <CategoryCard />
          </div>
        </div>

        {/* Separate Container Below */}
        <div className="w-3/4 rounded-lg shadow-lg flex flex-wrap items-center gap-8 p-4">
          <div className="flex flex-col gap-4 text-gray-900 w-2/5 bg-red-">
            <h3>INGREDIENTS</h3>
            <h1>Better Ingredients</h1>
            <small>
              Only the best when you choose products offered on our
              platform-high-quality ingredients for high quality products!
            </small>
          </div>
          <IngredientCard
            imageUrl={"/assets/images/bn2-2.jpg.png"}
            title={"kdhfjks kkj"}
            description={"h hscbjh uyad c"}
          />
          <IngredientCard
            imageUrl={"/assets/images/bn2-2.jpg.png"}
            title={"kdhfjks kkj"}
            description={"h hscbjh uyad c"}
          />{" "}
          <IngredientCard
            imageUrl={"/assets/images/bn2-2.jpg.png"}
            title={"kdhfjks kkj"}
            description={"h hscbjh uyad c"}
          />{" "}
          <IngredientCard
            imageUrl={"/assets/images/bn2-2.jpg.png"}
            title={"kdhfjks kkj"}
            description={"h hscbjh uyad c"}
          />{" "}
          <IngredientCard
            imageUrl={"/assets/images/bn2-2.jpg.png"}
            title={"kdhfjks kkj"}
            description={"h hscbjh uyad c"}
          />{" "}
        </div>
      </div>
      <div className="w-full px-12">
        <LatestNewsCard />
      </div>
    </div>
  );
};

export default OverlappingContainers;
