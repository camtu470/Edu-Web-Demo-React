export default function Partner() {
  const logos = [
    "https://commercial.static.antoree.com/assets/images/customer-client-3.png",
    "https://commercial.static.antoree.com/assets/images/y-nghia-logo-fpt-lan-3+1.png",
    "https://commercial.static.antoree.com/assets/images/customer-client-6.png",
    "https://commercial.static.antoree.com/assets/images/customer-client-4.png",
    "https://commercial.static.antoree.com/assets/images/img_insee.png",
    "https://commercial.static.antoree.com/assets/images/img_sanofi.png",
    "https://commercial.static.antoree.com/assets/images/img_aia.png",
    "https://commercial.static.antoree.com/assets/images/image+17.png",
    "https://commercial.static.antoree.com/assets/images/2552px-Honda_Logo+1.png",
    "https://commercial.static.antoree.com/assets/images/deoca.png",
    "https://commercial.static.antoree.com/assets/images/vng.png",
    "https://commercial.static.antoree.com/assets/images/customer-client-7.png",
    "https://commercial.static.antoree.com/assets/images/bic.png",
    "https://commercial.static.antoree.com/assets/images/customer-client-5.png",
    "https://commercial.static.antoree.com/assets/images/bayer.png",
  ];

  return (
    <div className="w-11/12 mx-auto bg-white py-10 px-4 sm:px-10 flex flex-col lg:flex-row gap-10 items-start">
      <div className="lg:w-4/12 w-full flex flex-col gap-4">
        <p className="font-extrabold text-3xl sm:text-4xl leading-[1.4]">
          PARTNER{" "}
          <span className="text-[#08A4A3] text-4xl sm:text-5xl">MY SHOP</span>
        </p>
        <p className="text-gray-600 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          suscipit ut officiis dignissimos modi facilis necessitatibus alias!
          Amet, earum voluptates?
        </p>
      </div>

      <div className="lg:w-8/12 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="h-16 border shadow rounded-3xl flex justify-center items-center bg-white p-2"
          >
            <img
              src={logo}
              alt={`partner-${index}`}
              className="max-h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
