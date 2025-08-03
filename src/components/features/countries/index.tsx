import { countriesData } from "../../../data/countriesData";

export default function Countries() {
  return (
    <div className="w-full relative flex flex-col gap-20 py-10 pb-20 bg-gradient-to-t from-[#CEEEED] to-white rounded-b-[80px]">
      {/* Danh sách quốc gia + mô tả */}
      <div className="w-11/12 mx-auto flex flex-wrap lg:flex-nowrap gap-6 items-start">
        {countriesData.map((country) => (
          <div
            key={country.id}
            className="relative w-full sm:w-[48%] lg:w-1/4"
            style={{
              clipPath: "polygon(0 0, 80% 0, 100% 50%, 100% 100%, 0 100%)",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-60 sm:h-64 md:h-72 object-cover"
              style={{
                clipPath: "polygon(0 0, 80% 0, 100% 50%, 100% 100%, 0 100%)",
              }}
            />
            <div
              className="absolute inset-0 flex flex-col gap-1 sm:gap-2 items-center justify-center text-white text-center bg-black/50"
              style={{
                clipPath: "polygon(0 0, 80% 0, 100% 50%, 100% 100%, 0 100%)",
              }}
            >
              <span className="text-xl sm:text-2xl font-bold">
                {country.name}
              </span>
              <span className="text-sm sm:text-base font-normal">
                {country.students}
              </span>
            </div>
          </div>
        ))}

        {/* Mô tả bên phải */}
        <div className="w-full lg:w-1/4 flex flex-col gap-6 pl-0 lg:pl-6 pt-4 lg:pt-0">
          <p className="text-2xl sm:text-3xl font-extrabold text-black">
            Lorem ipsum dolor sit amet consectet
          </p>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            eveniet laudantium provident possimus praesentium illum nesciunt
            recusandae beatae? Dolor, incidunt!
          </p>
          <button className="bg-black text-white p-3 sm:p-4 px-6 font-bold rounded-2xl w-fit">
            Xem thêm
          </button>
        </div>
      </div>

      {/* Form đăng ký */}
      <div className="relative w-11/12 mx-auto rounded-3xl flex flex-col lg:flex-row items-center gap-10 lg:gap-20 bg-black text-white p-8 sm:p-10 md:p-14 lg:p-16 xl:px-20">
        {/* Nội dung bên trái */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
          <p className="text-2xl sm:text-3xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            minima.
          </p>
          <p className="text-gray-300 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            voluptate ipsa? Delectus adipisci molestiae, fugit dignissimos.
          </p>
          <div className="flex flex-row gap-3 mt-4 sm:mt-6 items-center bg-white p-2 rounded-full w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 px-6 outline-none text-black w-full sm:w-8/12 rounded-full"
            />
            <button className="bg-black text-xs lg:text-lg font-bold p-2 lg:px-6 rounded-full w-1/2 sm:w-4/12">
              Nhận tư vấn
            </button>
          </div>
        </div>

        {/* Ảnh bên phải */}
        <img
          src="https://i.pinimg.com/736x/8f/e2/39/8fe2390430367b66272eb1e29fdf3114.jpg"
          alt=""
          className="w-full lg:w-5/12 h-54 lg:h-60 object-cover object-center rounded-xl"
        />
      </div>
    </div>
  );
}
