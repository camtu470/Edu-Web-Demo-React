import { useState } from "react";
import {
  FaStar,
  FaArrowLeftLong,
  FaArrowRightLong,
  FaHeart,
} from "react-icons/fa6";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { teacherData } from "../../../data/teacherData";

export default function Teachers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 1;

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < teacherData.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentTeacher = teacherData[currentIndex];

  return (
    <div className="w-11/12 md:w-9/12 mx-auto flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="text-2xl lg:text-4xl font-bold">Giảng viên nổi bật</p>
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
            disabled={currentIndex >= teacherData.length - itemsPerView}
          >
            <FaArrowRightLong className="text-xl" />
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="w-full border flex flex-col md:flex-row gap-6 bg-white shadow rounded-3xl p-6 hover:shadow-xl transition">
        {/* Left section */}
        <div className="w-full lg:w-8/12 flex-1 flex flex-col gap-4">
          {" "}
          <div className=" flex items-center gap-4">
            <img
              src={currentTeacher.avatar}
              alt={currentTeacher.fullName}
              className="w-20 h-20 rounded-full object-cover border"
            />
            <div className=" bg-orange-200 flex flex-col gap-1 lg:gap-2">
              <p className="font-bold text-2xl">{currentTeacher.fullName}</p>
              <p className="text-gray-500 text-md">
                {currentTeacher.specialization}
              </p>
            </div>
          </div>
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(currentTeacher.rating) ? "" : "text-gray-300"
                }
              />
            ))}
            <span className="text-gray-600 ml-2 text-sm hover:underline">
              ({currentTeacher.reviews} đánh giá)
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 text-[#08A4A3] text-xl">
              {currentTeacher.socialLinks?.facebook && (
                <a
                  href={currentTeacher.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="hover:text-black" />
                </a>
              )}
              {currentTeacher.socialLinks?.linkedin && (
                <a
                  href={currentTeacher.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="hover:text-black" />
                </a>
              )}
              {currentTeacher.socialLinks?.twitter && (
                <a
                  href={currentTeacher.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="hover:text-black" />
                </a>
              )}
              {currentTeacher.socialLinks?.instagram && (
                <a
                  href={currentTeacher.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:text-black" />
                </a>
              )}
            </div>
          </div>
          {/* Intro */}
          <p className="text-sm lg:text-lg text-gray-700">
            {currentTeacher.introduction}
          </p>
          {/* Degrees */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-md lg:text-xl text-gray-800">
              🎓 Học vấn :
            </p>
            <ul className="list-disc pl-10 text-gray-600 text-sm lg:text-lg flex flex-col gap-1">
              {currentTeacher.degrees.map((deg, idx) => (
                <li key={idx}>{deg}</li>
              ))}
            </ul>
          </div>
          {/* Students */}
          <p className="text-sm lg:text-lg text-gray-600">
            Đã giảng dạy cho {currentTeacher.totalStudents}+ học viên
          </p>
        </div>
        {/* Right avatar large */}
        <div className="hidden md:flex w-4/12 flex-col gap-4">
          <FaHeart className="text-[#FDA38A] text-xl ml-auto" />
          <img
            src={currentTeacher.avatar}
            alt={currentTeacher.fullName}
            className="rounded-2xl object-cover h-80 w-full"
          />
        </div>
      </div>
    </div>
  );
}
