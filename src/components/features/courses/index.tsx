import { coursesData } from "../../../data/coursesData";
import CourseCard from "../../ui/CourseCard";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();
  const limitedCourses = coursesData.slice(0, 6); // lấy tối đa 6 khóa học

  return (
    <div className="w-11/12 mx-auto flex flex-col gap-6">
      <div className="flex flex-col mb-2">
        <p className="text-md font-bold text-[#08A4A3]">Lorem ipsum !</p>
        <p className="text-xl lg:text-3xl font-extrabold">
          Lorem ipsum dolor sit amet
        </p>
        <div className="flex items-center justify-between">
          <p className="w-8/12 text-sm lg:text-md font-extralight text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            laborum.
          </p>
          <button
            className="w-4/12 p-2 px-4 bg-[#08A4A3] text-xs lg:text-lg font-bold text-white rounded-full lg:w-2/12"
            onClick={() => navigate("/shop")}
          >
            See more
          </button>
        </div>
      </div>

      {/* Hiển thị các course theo hàng 2 cột */}
      {Array.from({ length: Math.ceil(limitedCourses.length / 2) }, (_, i) => {
        const rowCourses = limitedCourses.slice(i * 2, i * 2 + 2);
        return (
          <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {rowCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
