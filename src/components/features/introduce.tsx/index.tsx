import { FaLongArrowAltRight } from "react-icons/fa";

export default function Introduce() {
  const journeySteps = [
    {
      id: 1,
      name: "Xây dựng nền tảng",
      description:
        "Khởi đầu với định hướng đúng đắn, xây dựng nền móng kiến thức vững chắc cho tương lai.",
      image:
        "https://i.pinimg.com/736x/3c/26/78/3c26784787438a2d0e5e1304a6e4dc41.jpg",
    },
    {
      id: 2,
      name: "Phát triển kỹ năng",
      description:
        "Đào sâu kỹ năng mềm và chuyên môn để đáp ứng nhu cầu học tập hiện đại.",
      image:
        "https://i.pinimg.com/1200x/27/e3/58/27e358b88ff45a6d05d18483d3a32b4b.jpg",
    },
    {
      id: 3,
      name: "Hợp tác quốc tế",
      description:
        "Mở rộng kết nối toàn cầu, chia sẻ tri thức và văn hóa với bạn bè năm châu.",
      image:
        "https://i.pinimg.com/736x/18/88/dd/1888dd34b5e0f4c49c2f5f77f513eecc.jpg",
    },
    {
      id: 4,
      name: "Hướng tới tương lai",
      description:
        "Sẵn sàng cho những thử thách mới, thích nghi với sự thay đổi nhanh chóng của thế giới.",
      image:
        "https://i.pinimg.com/736x/1f/90/2c/1f902c41448c647d543b04bc6c2c0f43.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col gap-10 p-6 sm:p-10 py-16 sm:py-20 border-y bg-[#CEEEED]">
        <div className="w-full md:w-10/12 lg:w-9/12 mx-auto flex flex-col gap-6 text-center justify-center items-center">
          <button className="w-full sm:w-fit bg-[#08A4A3] text-white font-bold text-base sm:text-xl rounded-full py-3 px-6 sm:px-10">
            How we start journey
          </button>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="text-sm sm:text-base text-gray-500 w-full md:w-9/12 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            fugiat animi, labore ipsum, veniam quaerat suscipit cupiditate odit
            voluptatibus illum nostrum, velit delectus exercitationem culpa?
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-wrap justify-center gap-6 mt-10">
          {journeySteps.map((step) => (
            <div
              key={step.id}
              className="w-full sm:w-[45%] lg:w-[22%] relative flex flex-col justify-center items-center gap-2 p-4 bg-white shadow rounded-3xl"
            >
              <div className="w-24 h-24 absolute top-[-40px] border-2 shadow border-gray-300 p-2 bg-white rounded-full overflow-hidden">
                <img
                  src={step.image}
                  alt={step.name}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <p className="text-base sm:text-lg font-bold mt-14 text-center">
                {step.name}
              </p>
              <p className="text-sm text-gray-500 font-thin text-center">
                {step.description}
              </p>
              <button className="bg-[#08A4A3] p-2 px-6 rounded-full text-white font-medium my-4 flex gap-2 items-center text-sm">
                Khám phá ngay <FaLongArrowAltRight />
              </button>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="w-full mt-10 text-white mx-auto bg-[#08A4A3] rounded-3xl p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center w-full">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative flex flex-col items-center gap-2"
              >
                {i !== 4 && (
                  <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-t from-[#08A4A3] to-white"></div>
                )}
                <p className="font-bold text-2xl sm:text-4xl">3.000+</p>
                <p className="text-sm sm:text-base">Lorem ipsum dolor</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Cards */}
        <div className="w-full mt-10 flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2 bg-white text-black flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl">
            <img
              src="https://i.pinimg.com/736x/93/bf/d1/93bfd1c9bcce4b7b1ae589c94a0616e6.jpg"
              alt=""
              className="w-10/12 sm:w-5/12 object-cover rounded-2xl"
            />
            <div className="w-full sm:w-7/12 flex flex-col gap-3">
              <p className="font-bold text-xl sm:text-3xl">
                Become a Instructor
              </p>
              <p className="text-sm text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae harum fuga ad cupiditate voluptatibus rerum
                praesentium exercitationem dolorem ab doloremque.
              </p>
              <button className="bg-[#08A4A3] p-2 px-6 text-white font-bold rounded-full w-fit">
                Join now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white text-black flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl">
            <img
              src="https://i.pinimg.com/736x/b1/a5/b8/b1a5b877972a35651fcd56d066d8be74.jpg"
              alt=""
              className="w-10/12 sm:w-5/12 object-cover rounded-2xl"
            />
            <div className="w-full sm:w-7/12 flex flex-col gap-3">
              <p className="font-bold text-xl sm:text-3xl">Become a Member</p>
              <p className="text-sm text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae harum fuga ad cupiditate voluptatibus rerum
                praesentium exercitationem dolorem ab doloremque.
              </p>
              <button className="bg-[#08A4A3] p-2 px-6 text-white font-bold rounded-full w-fit">
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
