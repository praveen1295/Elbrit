import React from "react";

const LatestNewsCard = () => {
  const blogs = [
    {
      id: 1,
      title: "New COVID-19 Variant Detected",
      smallDescription:
        "A new variant of COVID-19 has been detected in several countries, raising concerns among health officials.",
      image: "/assets/images/blog1-450x580.jpg.png",
    },
    {
      id: 2,
      title: "Vaccination Rates Increase Globally",
      smallDescription:
        "The global vaccination campaign has reached a new milestone, with over 75% of the population vaccinated in many countries.",
      image: "/assets/images/blog2-450x580.jpg.png",
    },
    {
      id: 3,
      title: "Travel Restrictions Lifted in Europe",
      smallDescription:
        "European countries are easing travel restrictions as COVID-19 cases continue to decline across the region.",
      image: "/assets/images/blog1-450x580.jpg.png",
    },
    {
      id: 4,
      title: "New Booster Shot Approved",
      smallDescription:
        "A new booster shot has been approved to combat emerging COVID-19 variants, recommended for high-risk groups.",
      image: "/assets/images/blog1-450x580.jpg.png",
    },
    {
      id: 5,
      title: "Schools Reopen After Pandemic Closures",
      smallDescription:
        "Schools in many countries are reopening after months of closures, with strict COVID-19 safety protocols in place.",
      image: "/assets/images/blog2-450x580.jpg.png",
    },
    {
      id: 6,
      title: "COVID-19 Cases Decline in Asia",
      smallDescription:
        "Asia sees a significant decline in COVID-19 cases, attributed to effective vaccination and preventive measures.",
      image: "/assets/images/blog2-450x580.jpg.png",
    },
    {
      id: 7,
      title: "WHO Issues New Guidelines on Mask Usage",
      smallDescription:
        "The World Health Organization has updated its guidelines on mask usage, focusing on crowded public spaces.",
      image: "/assets/images/blog2-450x580.jpg.png",
    },
    {
      id: 8,
      title: "COVID-19 Impact on Global Economy",
      smallDescription:
        "The global economy shows signs of recovery after the COVID-19 pandemic, though challenges remain in some sectors.",
      image: "/assets/images/blog2-450x580.jpg.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {blogs.map((item, index) => (
        <div
          key={item.id}
          className={`${
            index % 2 === 0
              ? "h-[40vh] sm:h-[35vh] md:h-[45vh]"
              : "h-[20vh] sm:h-[25vh] md:h-[30vh]"
          } bg-cover bg-center text-white flex flex-col justify-end p-4 rounded-lg shadow-md`}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          <h3 className="text-sm sm:text-base md:text-lg font-bold">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base">
            {item.smallDescription}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LatestNewsCard;
