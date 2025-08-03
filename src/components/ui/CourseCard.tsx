import { FaHeart, FaLocationDot } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../data/categoriesData";

interface Course {
  id: number;
  name: string;
  categoryId: number;
  instructorId: number;
  description: string;
  duration: string;
  language: string;
  price: number;
  knowledge: string[];
  roadmap: string[];
  tags: string[];
  mainImage: string;
  subImages: string[];
}

export default function CourseCard({ course }: { course: Course }) {
  const navigate = useNavigate();

  const getCategoryName = (id: number) => {
    const category = categoriesData.find((c) => c.id === id);
    return category ? category.name : "Unknown";
  };

  return (
    <div className="w-full border flex flex-col lg:flex-row gap-4 rounded-2xl shadow p-4 bg-white hover:shadow-xl transition-all duration-300">
      {/* Hình ảnh */}
      <img
        src={course.mainImage}
        alt={course.name}
        className="w-full lg:w-5/12 h-52 lg:h-72 object-cover rounded-2xl"
      />

      {/* Thông tin */}
      <div className="w-full lg:w-7/12 flex flex-col gap-2 p-2">
        {/* Danh mục & yêu thích */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <IoIosPricetags className="text-lg text-[#FD4917]" />
            <p className="text-sm lg:text-base text-gray-500">
              {getCategoryName(course.categoryId)}
            </p>
          </div>
          <FaHeart className="text-[#FDA38A]" />
        </div>

        {/* Tên khoá học */}
        <p className="text-base lg:text-xl font-bold line-clamp-2">
          {course.name}
        </p>

        {/* Mô tả */}
        <p className="text-sm lg:text-sm line-clamp-2 text-gray-500">
          {course.description}
        </p>

        {/* Thời lượng & ngôn ngữ */}
        <div className="flex flex-wrap gap-2 mt-2">
          <div className="flex gap-2 items-center bg-[#E2FFF2] text-[#33C681] px-4 py-1 text-xs lg:text-sm rounded-full">
            <MdOutlineAccessTimeFilled />
            <span>{course.duration}</span>
          </div>
          <div className="flex gap-2 items-center bg-[#FFF1ED] text-[#FD4917] px-4 py-1 text-xs lg:text-sm rounded-full">
            <FaLocationDot />
            <span>{course.language}</span>
          </div>
        </div>

        {/* Gạch ngang */}
        <div className="border border-gray-200 my-4 w-full"></div>

        {/* Giá & nút */}
        <div className="flex justify-between items-start sm:items-center gap-2">
          <p className="text-lg lg:text-2xl text-[#FD4917] font-extrabold">
            Giá: {course.price.toLocaleString()}{" "}
            <sup className="text-sm">VND</sup>
          </p>
          <button
            className="border-2 border-[#FD4917] text-[#FD4917] hover:bg-[#FD4917] hover:text-white transition px-4 py-2 rounded-full text-sm lg:text-base"
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}
