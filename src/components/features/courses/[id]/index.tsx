import { useParams } from "react-router-dom";
import { coursesData } from "../../../../data/coursesData";
import { IoIosPricetags } from "react-icons/io";
import { FaHeart, FaRecordVinyl } from "react-icons/fa6";
import { categoriesData } from "../../../../data/categoriesData";
import { IoTime } from "react-icons/io5";
import { teacherData } from "../../../../data/teacherData";
import TeacherCard from "../../../ui/TeacherCard";
import CourseCard from "../../../ui/CourseCard";

export default function CourseDetail() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <p className="text-center mt-10 text-red-500">Khóa học không tồn tại!</p>
    );
  }

  // Hàm lấy tên category từ categoryId
  const getCategoryName = (id: number) => {
    const category = categoriesData.find((c) => c.id === id);
    return category ? category.name : "Unknown";
  };

  return (
    <div className="flex flex-col ">
      <div className="w-full flex flex-col lg:flex-row gap-6 p-10">
        <div className="w-full lg:w-9/12 flex flex-col gap-6 shadow border border-gray-200 rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
            {/* Hình ảnh */}
            <div className="w-full lg:w-4/12 flex flex-col gap-4">
              <img
                src={course.mainImage}
                alt={course.mainImage}
                className="w-full h-52 sm:h-72 object-cover rounded-2xl"
              />
              <div className="grid grid-cols-2 gap-4">
                {course.subImages?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Ảnh phụ ${index + 1}`}
                    className="w-full object-cover rounded-lg border border-gray-200"
                  />
                ))}
              </div>
            </div>

            {/* Thông tin khóa học */}
            <div className="w-full lg:w-8/12 flex flex-col gap-4">
              {/* Danh mục + yêu thích */}
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <IoIosPricetags className="text-lg text-[#FD4917]" />
                  <p className="text-sm sm:text-lg text-gray-500">
                    {getCategoryName(course.categoryId)}
                  </p>
                </div>
                <FaHeart className="text-[#FDA38A]" />
              </div>

              <p className="text-xl sm:text-3xl font-bold">{course.name}</p>
              <p className="text-gray-500 text-sm sm:text-base">
                {course.description}
              </p>

              {/* Kiến thức + Lộ trình */}
              <div className="flex flex-col md:flex-row gap-4 border-b pb-4">
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                  <p className="font-medium text-[#08A4A3] text-lg sm:text-xl">
                    Kiến thức
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {course.knowledge.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                  <p className="font-medium text-[#08A4A3] text-lg sm:text-xl">
                    Lộ trình
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {course.roadmap.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Thời lượng, ngôn ngữ & tags */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b pb-4">
                <div className="flex flex-wrap gap-2">
                  <p className="px-4 py-1 bg-[#FFF1ED] text-xs text-[#FD6A40] rounded-2xl flex items-center gap-1">
                    <IoTime /> {course.duration}
                  </p>
                  <p className="px-4 py-1 bg-[#E2FFF2] text-xs text-[#1DBF73] rounded-2xl flex items-center gap-1">
                    <FaRecordVinyl /> {course.language}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((v, index) => {
                    const bgColors = [
                      "bg-[#FFF1ED] text-[#FD6A40]",
                      "bg-[#E2FFF2] text-[#1DBF73]",
                      "bg-blue-100 text-blue-800",
                      "bg-purple-100 text-purple-800",
                      "bg-pink-100 text-pink-800",
                      "bg-yellow-100 text-yellow-800",
                      "bg-red-100 text-red-800",
                    ];
                    const colorClass = bgColors[index % bgColors.length];
                    return (
                      <span
                        key={index}
                        className={`px-4 py-1 text-xs rounded-full ${colorClass}`}
                      >
                        {v}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Giá và nút đăng ký */}
              <div className="w-full mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-[#FD4917] text-2xl sm:text-3xl font-semibold">
                  Giá:
                  <strong className="ml-2 text-3xl sm:text-5xl">
                    {course.price.toLocaleString()}
                    <sup className="text-sm ml-1 align-super">VND</sup>
                  </strong>
                </p>
                <button className="w-full sm:w-auto bg-[#FD4917] p-3 px-6 rounded-full font-bold text-white hover:bg-[#e34511] transition">
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/12 grid grid-cols-1 gap-6">
          {teacherData.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
      <div className="w-11/12 mx-auto flex flex-col gap-6">
        <p className="text-2xl lg:text-3xl font-bold">Khóa học liên quan</p>{" "}
        {Array.from({ length: Math.ceil(coursesData.length / 2) }, (_, i) => {
          const rowCourses = coursesData.slice(i * 2, i * 2 + 2);
          return (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {rowCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
