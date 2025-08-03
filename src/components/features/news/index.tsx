import { newsData } from "../../../data/newsData";

export default function News() {
  return (
    <div className="w-full flex flex-col gap-6 bg-gradient-to-b from-gray-100 to-white py-6">
      {/* Header */}
      <div className="w-11/12 mx-auto flex items-center justify-between gap-4 py-4">
        <p className="text-3xl sm:text-4xl font-extrabold">Tin tức</p>
        <button className="w-auto border text-sm lg:text-lg border-gray-500 bg-black text-white p-2 px-6 rounded-full">
          Xem thêm
        </button>
      </div>

      {/* Content */}
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-6">
        {/* Tin nổi bật */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 bg-white border rounded-2xl p-4 shadow">
          <img
            src={newsData.featured.image}
            alt={newsData.featured.title}
            className="rounded-3xl h-64 md:h-80 object-cover"
          />
          <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500 items-start md:items-center px-2 gap-2">
            <p>Thời gian đăng : {newsData.featured.date}</p>
            <p>Tác giả : {newsData.featured.author}</p>
          </div>
          <p className="font-bold text-2xl md:text-3xl line-clamp-3">
            {newsData.featured.title}
          </p>
          <p className="text-gray-500 line-clamp-4">
            {newsData.featured.description}
          </p>
        </div>

        {/* Danh sách tin khác */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {newsData.list.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-4 bg-white items-center border rounded-2xl p-4 shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-4/12 rounded-xl h-40 object-cover"
              />
              <div className="w-full md:w-8/12 flex flex-col gap-4">
                <div className="flex flex-col md:flex-row justify-between text-sm items-start md:items-center px-2 gap-1">
                  <p className="text-gray-500">Tác giả : {item.author}</p>
                  <p className="text-gray-500 ml-auto">
                    Ngày đăng : {item.date}
                  </p>
                </div>
                <p className="font-bold line-clamp-2">{item.title}</p>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
