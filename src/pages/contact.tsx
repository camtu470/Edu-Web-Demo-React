import { TfiEmail } from "react-icons/tfi";
import Section from "../components/ui/Section";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { useEffect } from "react";

declare const google: any;

export default function ContactPage() {
  useEffect(() => {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: 10.762622, lng: 106.660172 },
        zoom: 14,
      }
    );

    new google.maps.Marker({
      position: { lat: 10.762622, lng: 106.660172 },
      map,
      title: "Địa điểm của bạn",
    });
  }, []);

  return (
    <div className="flex flex-col">
      <Section title="Liên hệ" />

      {/* Contact Info Cards */}
      <div className="w-11/12 mx-auto flex md:flex-row flex-wrap justify-between gap-8 py-10">
        {[
          // Reusable data array
          {
            icon: <TfiEmail className="text-3xl lg:text-5xl text-[#08A4A3]" />,
            title: "Email Address",
            lines: ["abcndlj@example.com", "efh@example.com"],
          },
          {
            icon: <FaPhone className="text-3xl lg:text-5xl text-[#08A4A3]" />,
            title: "Phone Number",
            lines: ["037.337.2534", "098.398.6643"],
          },
          {
            icon: (
              <FaLocationDot className="text-3xl lg:text-5xl text-[#08A4A3]" />
            ),
            title: "Location",
            lines: ["123 Example Street, District 1, HCMC"],
          },
          {
            icon: (
              <MdAccessTime className="text-3xl lg:text-5xl text-[#08A4A3]" />
            ),
            title: "Work Day",
            lines: ["Monday to Friday", "8:00 AM – 5:00 PM"],
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center text-center gap-2 flex-1 min-w-[200px]"
          >
            <div className="p-4 bg-[#CEEEED] rounded-full w-24 h-24 flex items-center justify-center">
              {item.icon}
            </div>
            <p className="font-bold text-xl text-[#08A4A3]">{item.title}</p>
            <ul className="text-gray-500 text-sm">
              {item.lines.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact Form + Images */}
      <div className="w-full bg-gradient-to-t from-[#a2e9e7] to-white py-20">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left: Form */}
          <div className="lg:w-1/2 w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit</p>
              <p className="text-3xl text-[#08A4A3] font-extrabold">
                Get In Touch With Us
              </p>
              <p className="text-sm text-gray-500">
                We’re here to help. Fill out the form and we’ll get back to you.
              </p>
            </div>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-4 px-6 rounded-xl placeholder-[#0BA69D] focus:outline-none focus:ring-1 focus:ring-[#0BA69D]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-4 px-6 rounded-xl placeholder-[#0BA69D] focus:outline-none focus:ring-1 focus:ring-[#0BA69D]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full p-4 px-6 rounded-xl placeholder-[#0BA69D] focus:outline-none focus:ring-1 focus:ring-[#0BA69D]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 px-6 rounded-xl placeholder-[#0BA69D] focus:outline-none focus:ring-1 focus:ring-[#0BA69D]"
                />
              </div>
              <textarea
                placeholder="Content"
                className="w-full p-4 px-6 rounded-xl placeholder-[#0BA69D] focus:outline-none focus:ring-1 focus:ring-[#0BA69D]"
                rows={4}
              />
              <button className="mt-4 bg-[#0BA69D] text-xl font-bold text-white py-4 px-6 w-10/12 md:w-6/12 mx-auto rounded-full">
                Send Now
              </button>
            </form>
          </div>

          {/* Right: Images */}

          <div className="hidden lg:block relative lg:w-1/2 w-full h-[500px] lg:h-auto">
            <img
              src="https://i.pinimg.com/736x/11/6a/f2/116af2df4855c0238abc76a88c6a179a.jpg"
              className="w-2/3 h-60 object-cover rounded-2xl border-[10px] border-white"
              alt=""
            />
            <img
              src="https://i.pinimg.com/1200x/f2/7c/2c/f27c2c4a03a79b1fcea765f92dac2a4d.jpg"
              className="absolute bottom-0 right-0 w-1/2 h-52 object-cover rounded-2xl border-[10px] border-white"
              alt=""
            />
            <img
              src="https://i.pinimg.com/736x/ae/50/c8/ae50c854b44bbe2e68daabe2ea0aa189.jpg"
              className="absolute top-[-40px] right-[-40px] w-40 h-40 object-cover border-[8px] border-white rounded-bl-[80px]"
              alt=""
            />
            <img
              src="https://i.pinimg.com/1200x/8d/6c/b8/8d6cb824e4acbcebf0b1407e34cea8b4.jpg"
              className="absolute bottom-[-50px] left-[60px] w-32 h-32 object-cover border-[8px] border-white rounded-tr-[80px]"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full bg-gradient-to-b from-[#a2e9e7] to-white py-10">
        <div
          id="map"
          className="w-11/12 mx-auto rounded-xl"
          style={{ height: "400px" }}
        ></div>
      </div>
    </div>
  );
}
