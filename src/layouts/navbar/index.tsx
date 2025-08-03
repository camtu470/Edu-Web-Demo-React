import { useState, useRef } from "react";
import { FaChalkboardTeacher, FaSchool, FaUniversity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("vi");
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-5 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text-xl font-bold text-[#0BA69D]">
        <a href="/">My Shop</a>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-xl relative">
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:text-[#08A4A3]">Cửa hàng ▾</button>

          {showDropdown && (
            <div className="absolute top-full left-[-140px] mt-6 w-[840px] grid grid-cols-1 md:grid-cols-3 gap-4 bg-white border rounded-xl shadow-lg p-6 z-50">
              <div
                className="flex flex-col gap-1 p-4 rounded-lg hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("/shop")}
              >
                <FaSchool className="text-[#08A4A3] text-2xl mb-2" />
                <p className="font-bold text-xl">Tất cả khóa học</p>
                <p className="text-sm text-gray-500 font-extralight line-clamp-2">
                  Khám phá tất cả khóa học có sẵn phù hợp cho mọi cấp độ.
                </p>
              </div>
              <div className="flex flex-col gap-1 p-4 rounded-lg hover:bg-gray-100 cursor-pointer">
                <FaUniversity className="text-[#08A4A3] text-2xl mb-2" />
                <p className="font-bold text-xl">Khóa học mới</p>
                <p className="text-sm font-extralight text-gray-500 line-clamp-2">
                  Những khóa học mới nhất vừa được cập nhật gần đây.
                </p>
              </div>
              <div className="flex flex-col gap-1 p-4 rounded-lg hover:bg-gray-100 cursor-pointer">
                <FaChalkboardTeacher className="text-[#08A4A3] text-2xl mb-2" />
                <p className="font-bold text-xl">Bán chạy nhất</p>
                <p className="text-sm text-gray-500 line-clamp-2">
                  Những khóa học được nhiều học viên đăng ký nhất.
                </p>
              </div>
            </div>
          )}
        </li>

        <li>
          <a href="/teacher" className="hover:text-[#0BA69D]">
            Giáo viên
          </a>
        </li>
        <li>
          <a href="/about-us" className="hover:text-[#0BA69D]">
            Về chúng tôi
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-[#0BA69D]">
            Liên hệ
          </a>
        </li>
      </ul>

      {/* Actions */}
      <div className="hidden md:flex items-center space-x-4">
        <button
          className="bg-[#0BA69D] text-white px-6 py-2 rounded-xl hover:bg-[#0A908A]"
          onClick={() => navigate("/login")}
        >
          Đăng nhập
        </button>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-2 text-sm"
        >
          <option value="vi">VI</option>
          <option value="en">EN</option>
        </select>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-4 md:hidden z-50">
          <a href="/shop" className="hover:text-[#08A4A3]">
            Cửa hàng
          </a>
          <a href="/teacher" className="hover:text-[#08A4A3]">
            Giáo viên
          </a>
          <a href="/about-us" className="hover:text-[#08A4A3]">
            Về chúng tôi
          </a>
          <a href="/contact" className="hover:text-[#08A4A3]">
            Liên hệ
          </a>
          <button
            className="bg-[#0BA69D] text-white px-4 py-2 rounded-xl mt-2"
            onClick={() => navigate("/login")}
          >
            Đăng nhập
          </button>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-2 text-sm mt-2"
          >
            <option value="vi">VI</option>
            <option value="en">EN</option>
          </select>
        </div>
      )}
    </nav>
  );
}
