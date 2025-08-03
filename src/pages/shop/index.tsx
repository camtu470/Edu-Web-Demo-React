import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Section from "../../components/ui/Section";
import CourseCard from "../../components/ui/CourseCard";
import { coursesData } from "../../data/coursesData";
import { categoriesData } from "../../data/categoriesData";

export default function CoursesPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [keyword, setKeyword] = useState("");
  const [categoryId, setCategoryId] = useState<number | "">("");
  const [price, setPrice] = useState(10000000);

  useEffect(() => {
    const categoryParam = params.get("category");
    if (categoryParam) {
      setCategoryId(Number(categoryParam));
    }
  }, [location.search]);

  const resetFilters = () => {
    setKeyword("");
    setCategoryId("");
    setPrice(10000000);
  };

  const filteredCourses = coursesData.filter((course) => {
    const matchKeyword = course.name
      .toLowerCase()
      .includes(keyword.toLowerCase());
    const matchCategory = categoryId === "" || course.categoryId === categoryId;
    const matchPrice = course.price <= price;

    return matchKeyword && matchCategory && matchPrice;
  });

  return (
    <div className="flex flex-col">
      <Section title="Cửa hàng" />

      {/* Bộ lọc */}
      <div className="w-11/12 mx-auto flex flex-col gap-6">
        <div className="w-full bg-[#0BA69D] rounded-3xl flex gap-2 lg:gap-8 p-6 px-10 items-start flex-wrap">
          {/* Từ khóa */}
          <FilterBlock label="Tìm theo từ khóa" className="w-full md:w-4/12">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-1 lg:py-3 text-md focus:outline-none focus:ring-2 focus:ring-[#08A4A3]"
            />
          </FilterBlock>

          <FilterBlock label="Tìm theo danh mục" className="w-full md:w-3/12">
            <select
              value={categoryId}
              onChange={(e) =>
                setCategoryId(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
              className="w-full border border-gray-300 text-gray-500 rounded-lg px-3 py-1 lg:py-3 text-md focus:outline-none focus:ring-2 focus:ring-[#08A4A3] appearance-none"
            >
              <option value="">Chọn lĩnh vực khóa học</option>
              {categoriesData.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </FilterBlock>

          {/* Giá */}
          <FilterBlock label="Tìm theo giá" className="w-full md:w-3/12">
            <input
              type="range"
              min={0}
              max={10000000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-white"
            />
            <div className="flex justify-between mt-2 text-white text-sm font-medium">
              <span>0</span>
              <span>
                Giá tối đa:{" "}
                <span className="font-bold">
                  {price.toLocaleString("vi-VN")} VND
                </span>
              </span>
            </div>
          </FilterBlock>

          {/* Reset */}
          <div className="w-full md:w-1/12 mt-2">
            <button
              onClick={resetFilters}
              className="w-full bg-white text-[#0BA69D] font-semibold px-4 py-1 lg:py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Danh sách khóa học */}
      <div className="w-11/12 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-center col-span-full text-lg font-medium text-gray-500">
            Không tìm thấy khóa học phù hợp.
          </p>
        )}
      </div>
    </div>
  );
}

function FilterBlock({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <p className="text-white text-md font-medium">{label}</p>
      {children}
    </div>
  );
}
