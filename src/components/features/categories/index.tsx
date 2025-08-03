// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { categoriesData } from "../../../data/categoriesData";
// import { coursesData } from "../../../data/coursesData";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// export default function Categories() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerView = 1;
//   const navigate = useNavigate();

//   const handlePrev = () => {
//     if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
//   };

//   const handleNext = () => {
//     if (currentIndex < categoriesData.length - itemsPerView) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const currentCategory = categoriesData[currentIndex];

//   const handleCategoryClick = (categoryId: number) => {
//     navigate(`/shop?category=${categoryId}`);
//   };

//   const courseCount = coursesData.filter(
//     (course) => course.categoryId === currentCategory.id
//   ).length;

//   return (
//     <div className="w-11/12 md:w-9/12 mx-auto flex flex-col gap-6">
//       <div className="flex justify-between items-center">
//         <p className="text-2xl lg:text-4xl font-bold">Danh mục khóa học</p>
//         <div className="flex gap-2">
//           <button
//             className="bg-gray-200 p-2 rounded-full disabled:opacity-40"
//             onClick={handlePrev}
//             disabled={currentIndex === 0}
//           >
//             <FaArrowLeftLong className="text-xl" />
//           </button>
//           <button
//             className="bg-gray-200 p-2 rounded-full disabled:opacity-40"
//             onClick={handleNext}
//             disabled={currentIndex >= categoriesData.length - itemsPerView}
//           >
//             <FaArrowRightLong className="text-xl" />
//           </button>
//         </div>
//       </div>

//       {/* Category Card */}
//       <div
//         onClick={() => handleCategoryClick(currentCategory.id)}
//         className="w-full border bg-white shadow rounded-3xl p-6 flex flex-col md:flex-row gap-6 cursor-pointer hover:shadow-xl transition"
//       >
//         {/* Left section */}
//         <div className="w-full md:w-8/12 flex flex-col gap-2 justify-center">
//           <img
//             src={currentCategory.image}
//             alt=""
//             className="h-60 md:h-72 lg:h-80 w-full rounded-t-3xl object-cover"
//           />
//           <p className="font-bold text-xl lg:text-2xl">
//             {currentCategory.id} - {currentCategory.name}
//           </p>
//           <p className="text-gray-700 text-lg">Số khóa học: {courseCount}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../../data/categoriesData";
import { coursesData } from "../../../data/coursesData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const navigate = useNavigate();

  // Update itemsPerView based on screen width
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth >= 768 ? 4 : 1); // 4 on desktop, 1 on mobile
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < categoriesData.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const visibleCategories = categoriesData.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  const handleCategoryClick = (categoryId: number) => {
    navigate(`/shop?category=${categoryId}`);
  };

  return (
    <div className="w-11/12 md:w-9/12 mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-2xl lg:text-4xl font-bold">Danh mục khóa học</p>
        <div className="flex gap-2">
          <button
            className="bg-gray-200 p-2 rounded-full disabled:opacity-40"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FaArrowLeftLong className="text-xl" />
          </button>
          <button
            className="bg-gray-200 p-2 rounded-full disabled:opacity-40"
            onClick={handleNext}
            disabled={currentIndex >= categoriesData.length - itemsPerView}
          >
            <FaArrowRightLong className="text-xl" />
          </button>
        </div>
      </div>

      {/* Category List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleCategories.map((category) => {
          const courseCount = coursesData.filter(
            (course) => course.categoryId === category.id
          ).length;

          return (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="border bg-white shadow rounded-3xl p-4 flex flex-col gap-3 cursor-pointer hover:shadow-xl transition"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-48 w-full object-cover rounded-2xl"
              />
              <p className="font-bold text-xl">{category.name}</p>
              <p className="text-gray-700 text-base">
                Số khóa học: {courseCount}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
