export default function RegisterPage() {
  return (
    <div className="w-full bg-gradient-to-b py-10 from-[#CEEEED] to-white">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 my-4 bg-white shadow mx-auto border rounded-2xl flex flex-col lg:flex-row items-center gap-6 p-6 md:p-10">
        <div className="w-full lg:w-7/12 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-2xl md:text-3xl font-extrabold">
              WELCOME TO MY SHOP
            </p>
            <p className="text-base md:text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
              iste.
            </p>
          </div>
          <form action="" className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="w-full flex gap-6">
                <input
                  type="text"
                  placeholder="Fullname"
                  className="w-8/12 border border-gray-700 rounded-full py-3 px-6 text-base md:text-lg text-black placeholder-gray-800 focus:outline-none focus:border-[#0BA69D] focus:ring-1 focus:ring-[#0BA69D]"
                />
                <div className="w-4/12 flex gap-4 mt-2 md:mt-0">
                  <label className="flex text-sm md:text-lg items-center gap-1 text-black">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="accent-[#08A4A3] w-8 h-8"
                    />
                    Male
                  </label>
                  <label className="flex text-sm md:text-lg items-center gap-1 text-black">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="accent-[#08A4A3] w-8 h-8"
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Email"
                className="w-full md:w-1/2 border border-gray-700 rounded-full py-3 px-6 text-base md:text-lg text-black placeholder-gray-800 focus:outline-none focus:border-[#0BA69D] focus:ring-1 focus:ring-[#0BA69D]"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full md:w-1/2 border border-gray-700 rounded-full py-3 px-6 text-base md:text-lg text-black placeholder-gray-800 focus:outline-none focus:border-[#0BA69D] focus:ring-1 focus:ring-[#0BA69D]"
              />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-700 rounded-full py-3 px-6 text-base md:text-lg text-black placeholder-gray-800 focus:outline-none focus:border-[#0BA69D] focus:ring-1 focus:ring-[#0BA69D]"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-700 rounded-full py-3 px-6 text-base md:text-lg text-black placeholder-gray-800 focus:outline-none focus:border-[#0BA69D] focus:ring-1 focus:ring-[#0BA69D]"
            />
            <button className="p-3 w-full md:w-9/12 mt-6 mx-auto text-base md:text-lg font-bold bg-[#08A4A3] rounded-full text-white">
              Register
            </button>
            <div className="text-center text-sm md:text-base text-gray-600">
              Have an account?{" "}
              <a
                href="/login"
                className="text-[#08A4A3] font-medium hover:underline"
              >
                Login
              </a>
            </div>
          </form>
        </div>
        <div className="hidden lg:block w-5/12">
          <img
            src="https://i.pinimg.com/originals/78/16/53/7816539f6bcb3e131bd2bae14a0c3b09.gif"
            alt="Register illustration"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
