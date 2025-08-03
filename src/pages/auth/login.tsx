// export default function LoginPage() {
//   return (
//     <div className="w-full bg-gradient-to-b py-10 from-[#CEEEED] to-white">
//       <div className="w-9/12 my-10 bg-white shadow mx-auto border rounded-2xl flex items-center gap-6 p-10">
//         <div className="w-1/2 flex flex-col gap-6">
//           <div className="flex flex-col gap-2">
//             <p className="text-3xl font-extrabold">WELCOME BACK</p>
//             <p className="text-lg text-gray-500">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
//               iste.
//             </p>
//           </div>
//           <form action="" className="flex flex-col gap-5 p-6">
//             <input
//               type="text"
//               placeholder="Username"
//               className=" border border-gray-700 rounded-full py-3 px-6 text-lg text-black placeholder-gray-800 focus:outline-none focus:border-[#0BA69D] focus:ring-1 focus:ring-[#0BA69D]  appearance-none"
//             />
//             <input
//               type="text"
//               placeholder="Password"
//               className=" border border-gray-700 rounded-full py-3 px-6 text-lg text-black placeholder-gray-800 focus:outline-none focus:border-[#0BA69D] focus:ring-1 focus:ring-[#0BA69D]  appearance-none"
//             />
//             <div className="flex justify-between items-center">
//               <label className="flex items-center gap-2 text-gray-700 text-lg ml-2">
//                 <input type="checkbox" className="accent-[#08A4A3] w-4 h-4" />
//                 Ghi nhớ đăng nhập
//               </label>
//               <a
//                 href="/forgot-password"
//                 className="text-[#08A4A3] text-lg hover:underline"
//               >
//                 Quên mật khẩu?
//               </a>
//             </div>
//             <button className="p-3 w-9/12 mt-6 mx-auto text-lg font-bold bg-[#08A4A3] rounded-full text-white">
//               Login
//             </button>
//             <div className="text-center text-lg text-gray-600">
//               Don't have an account?{" "}
//               <a
//                 href="/register"
//                 className="text-[#08A4A3] font-medium hover:underline"
//               >
//                 Sign up
//               </a>
//             </div>
//           </form>
//         </div>
//         <div className="w-1/2">
//           <img
//             src="https://i.pinimg.com/originals/78/16/53/7816539f6bcb3e131bd2bae14a0c3b09.gif"
//             alt=""
//             className="rounded-2xl object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function LoginPage() {
  return (
    <div className="w-full bg-gradient-to-b py-10 from-[#CEEEED] to-white">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 my-10 bg-white shadow mx-auto border rounded-2xl flex flex-col lg:flex-row items-center gap-6 p-6 md:p-10">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-2xl md:text-3xl font-extrabold">WELCOME BACK</p>
            <p className="text-base md:text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
              iste.
            </p>
          </div>
          <form action="" className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-700 rounded-full py-3 px-6 text-base md:text-lg text-black placeholder-gray-800 focus:outline-none focus:border-[#0BA69D] focus:ring-1 focus:ring-[#0BA69D] appearance-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-700 rounded-full py-3 px-6 text-base md:text-lg text-black placeholder-gray-800 focus:outline-none focus:border-[#0BA69D] focus:ring-1 focus:ring-[#0BA69D] appearance-none"
            />
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
              <label className="flex items-center gap-2 text-gray-700 text-sm md:text-base ml-1">
                <input type="checkbox" className="accent-[#08A4A3] w-4 h-4" />
                Ghi nhớ đăng nhập
              </label>
              <a
                href="/forgot-password"
                className="text-[#08A4A3] text-sm md:text-base hover:underline"
              >
                Quên mật khẩu?
              </a>
            </div>
            <button className="p-3 w-full md:w-9/12 mt-6 mx-auto text-base md:text-lg font-bold bg-[#08A4A3] rounded-full text-white">
              Login
            </button>
            <div className="text-center text-sm md:text-base text-gray-600">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-[#08A4A3] font-medium hover:underline"
              >
                Sign up
              </a>
            </div>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block w-1/2">
          <img
            src="https://i.pinimg.com/originals/78/16/53/7816539f6bcb3e131bd2bae14a0c3b09.gif"
            alt="Login Illustration"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
