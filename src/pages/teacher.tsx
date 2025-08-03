import { useState } from "react";
import {
  FaCity,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaTransgender,
  FaTwitter,
} from "react-icons/fa6";
import { teacherData } from "../data/teacherData";
import Introduce from "../components/features/introduce.tsx";
import { MdOutlineRecordVoiceOver } from "react-icons/md";

// Trích xuất các giá trị không trùng
const uniqueValues = (key: string) => {
  const values = teacherData
    .map((t) => t[key as keyof typeof t])
    .filter(
      (v): v is string | number =>
        typeof v === "string" || typeof v === "number"
    );
  return Array.from(new Set(values));
};

export default function TeacherPage() {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [region, setRegion] = useState("");
  const [nationality, setNationality] = useState("");
  const [minRating, setMinRating] = useState("");

  const genders = uniqueValues("gender");
  const regions = uniqueValues("region");
  const nationalities = uniqueValues("nationality");

  const filteredTeachers = teacherData.filter((teacher) => {
    const matchSearch = teacher.fullName
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchGender = gender ? teacher.gender === gender : true;
    const matchRegion = region ? teacher.region === region : true;
    const matchNationality = nationality
      ? teacher.nationality === nationality
      : true;
    const matchRating = minRating
      ? teacher.rating >= parseFloat(minRating)
      : true;

    return (
      matchSearch &&
      matchGender &&
      matchRegion &&
      matchNationality &&
      matchRating
    );
  });

  return (
    <div className="flex flex-col">
      <Introduce />
      <div className="w-full px-10 mx-auto flex flex-col gap-6 bg-gradient-to-t from-[#CEEEED] py-10 to-white">
        {/* Heading */}
        <div className="flex flex-col py-4 lg:py-10 gap-2 lg:gap-4 text-center">
          <p className="w-9/12 text-[#08A4A3] mx-auto text-2xl lg:text-6xl font-extrabold">
            Đội ngũ giáo viên chất lượng cao
          </p>
          <p className="text-sm lg:text-lg text-gray-500">
            Tìm kiếm và lựa chọn giáo viên phù hợp với nhu cầu học tập của bạn.
          </p>
        </div>

        {/* Bộ lọc */}
        <div className="w-full lg:w-11/12 mx-auto flex flex-col lg:flex-row items-center gap-2 lg:gap-6 bg-[#0BA69D] rounded-3xl p-6 lg:px-10">
          {/* Search */}
          <div className="w-11/12 lg:w-4/12 flex flex-col gap-2">
            <p className="text-white font-medium">Tìm kiếm theo từ khóa</p>
            <input
              type="text"
              placeholder="Nhập tên giáo viên"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-md focus:outline-none focus:ring-2 focus:ring-[#08A4A3]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="w-11/12 lg:w-4/12 flex gap-4 lg:gap-6">
            <div className="w-1/2 flex flex-col gap-2">
              <p className="text-white font-medium">Giới tính</p>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full border border-gray-300 text-gray-500 rounded-lg px-3 py-3 text-md focus:outline-none focus:ring-2 focus:ring-[#08A4A3] appearance-none"
              >
                <option value="">Tất cả</option>
                {genders.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* Region */}
            <div className="w-1/2 flex flex-col gap-2">
              <p className="text-white font-medium">Miền</p>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full border border-gray-300 text-gray-500 rounded-lg px-3 py-3 text-md focus:outline-none focus:ring-2 focus:ring-[#08A4A3] appearance-none"
              >
                <option value="">Tất cả</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-11/12 lg:w-4/12 flex gap-4 lg:gap-6">
            {" "}
            <div className="w-1/2 flex flex-col gap-2">
              <p className="text-white font-medium">Quốc tịch</p>
              <select
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full border border-gray-300 text-gray-500 rounded-lg px-3 py-3 text-md focus:outline-none focus:ring-2 focus:ring-[#08A4A3] appearance-none"
              >
                <option value="">Tất cả</option>
                {nationalities
                  .filter((n) => typeof n === "string" || typeof n === "number")
                  .map((n) => (
                    <option key={n.toString()} value={n}>
                      {n}
                    </option>
                  ))}
              </select>
            </div>
            {/* Rating */}
            <div className="w-1/2 flex flex-col gap-2">
              <p className="text-white font-medium">Số sao</p>
              <select
                value={minRating}
                onChange={(e) => setMinRating(e.target.value)}
                className="w-full border border-gray-300 text-gray-500 rounded-lg px-3 py-3 text-md focus:outline-none focus:ring-2 focus:ring-[#08A4A3] appearance-none"
              >
                <option value="">Tất cả</option>
                <option value="5">5 sao</option>
                <option value="4.5">4.5+ sao</option>
                <option value="4">4+ sao</option>
                <option value="3">3+ sao</option>
              </select>
            </div>
          </div>
          {/* Nationality */}

          {/* Reset */}
          <div className="w-10/12 mt-2  lg:w-1/12 lg:mt-auto">
            <button
              className="w-full bg-white text-[#0BA69D] font-semibold px-4 py-3 rounded-xl hover:bg-gray-100 transition"
              onClick={() => {
                setSearch("");
                setGender("");
                setRegion("");
                setNationality("");
                setMinRating("");
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Danh sách giáo viên */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="border bg-white shadow rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src={teacher.avatar}
                    alt={teacher.fullName}
                    className="w-10 h-10 lg:w-20 lg:h-20 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-md lg:text-2xl font-bold">
                      {teacher.fullName}
                    </p>
                    <p className="text-xs lg:text-md text-gray-500">
                      {teacher.specialization}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1 items-center text-xs lg:text-lg text-yellow-500">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.round(teacher.rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-gray-600 ml-2 text-xs lg:text-sm hover:underline">
                      ({teacher.reviews} đánh giá)
                    </span>
                  </div>
                  <p className="text-xs lg:text-lg text-gray-500">
                    Học viên: <strong>{teacher.totalStudents}</strong>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 text-[#08A4A3] text-xl">
                {teacher.socialLinks.facebook && (
                  <FaFacebookF className="hover:text-black" />
                )}
                {teacher.socialLinks.linkedin && (
                  <FaLinkedinIn className="hover:text-black" />
                )}
                {teacher.socialLinks.twitter && (
                  <FaTwitter className="hover:text-black" />
                )}
                {teacher.socialLinks.instagram && (
                  <FaInstagram className="hover:text-black" />
                )}
              </div>

              <p className="text-gray-500 text-sm lg:text-lg line-clamp-3">
                {teacher.introduction}
              </p>
              <div className="flex flex-wrap gap-4">
                {" "}
                <div className="flex gap-2 items-center bg-[#FFF1ED] text-[#FD4917] p-2 px-6 font-medium rounded-full">
                  <FaTransgender className="text-mf" />
                  <p className="text-sm">{teacher.gender}</p>
                </div>
                <div className="flex gap-2 items-center bg-[#E2FFF2] text-[#33C681] p-2 px-6 font-medium rounded-full">
                  <FaCity className="text-md" />
                  <p className="text-sm">{teacher.nationality}</p>
                </div>
                <div className="flex gap-2 items-center bg-[#CEEEED] text-[#08A4A3] p-2 px-6 font-medium rounded-full">
                  <MdOutlineRecordVoiceOver className="text-md" />
                  <p className="text-sm">
                    Giọng : {teacher.region || "Không xác định"}
                  </p>
                </div>
              </div>

              <div className="flex ml-auto">
                <button className="border p-2 px-4 shadow rounded-l-xl">
                  Xem chi tiết
                </button>
                <button className="border p-2 px-4 shadow rounded-r-xl">
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
