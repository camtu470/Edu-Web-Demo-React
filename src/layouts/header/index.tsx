export default function Header() {
  return (
    <div
      className="w-full h-[600px] bg-cover bg-center bg-no-repeat flex mb-10"
      style={{ backgroundImage: "url('/images/banner2.png')" }}
    >
      <div className="w-full md:w-11/12 lg:w-9/12 p-6 md:p-10 lg:p-20 pt-32 md:pt-36 xl:pt-40 pl-6 md:pl-20 xl:pl-40 flex flex-col gap-6">
        <p className="text-3xl md:text-5xl xl:text-6xl font-extrabold leading-snug md:leading-[1.3] px-0 md:px-6 lg:px-10">
          <span className="text-[#FF4D07]">Giáo dục 4.0</span> <br />
          Kết nối tri thức toàn cầu!
        </p>
        <p className="text-sm md:text-base xl:text-lg font-extralight text-gray-600 w-full md:w-11/12 xl:w-10/12 px-0 md:px-6 lg:px-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          fugiat ex voluptatibus illum tempore quam labore consequatur maxime
          hic minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Laboriosam fugiat ex voluptatibus illum tempore quam labore
          consequatur maxime hic minus.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 px-0 md:px-6 lg:px-10">
          <button className="p-3 md:p-4 px-6 md:px-10 text-white font-bold rounded-full bg-[#23B6AE]">
            Nhận tư vấn miễn phí
          </button>
          <button className="p-3 md:p-4 px-6 md:px-10 text-[#FF4D07] font-bold rounded-full bg-white">
            Đăng ký ngay
          </button>
        </div>
      </div>
    </div>
  );
}
