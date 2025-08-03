import { FaHeart, FaUsers, FaStar } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

interface Teacher {
  id: number;
  fullName: string;
  avatar: string;
  specialization: string;
  introduction: string;
  degrees: string[];
  totalStudents: number;
  rating: number;
  reviews: number;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export default function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <div className="w-full p-4 border rounded-xl flex flex-col">
      <FaHeart className="text-[#FDA38A] ml-auto" />
      <div className="flex gap-4 items-center">
        <img
          src={teacher.avatar}
          alt={teacher.fullName}
          className="w-20 h-20 object-center object-cover rounded-full"
        />
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold line-clamp-2">{teacher.fullName}</p>
          <p className="text-sm text-gray-500 line-clamp-2">
            {teacher.introduction}
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2 bg-[#E2FFF2] text-[#33C681] p-2 px-4 rounded-full">
          <FaUsers />
          <span>{teacher.totalStudents.toLocaleString()} học viên</span>
        </div>
        <div className="flex items-center gap-2 bg-[#FFF1ED] text-[#FD4917] p-2 px-4 rounded-full">
          <FaStar />
          <span>
            {teacher.rating.toFixed(1)} ({teacher.reviews} đánh giá)
          </span>
        </div>
      </div>
    </div>
  );
}
