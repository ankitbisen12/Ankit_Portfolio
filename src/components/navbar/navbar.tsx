"use client";

import React from "react";
import { Logs } from "lucide-react";
import Sidebar from "./sidebar";
import { useScrollToSection } from "@/customHooks/useScrollToSection";

const Navbar = () => {
  const { open, setOpen, scrollToSection } = useScrollToSection();

  return (
    <React.Fragment>
      <nav className="w-full bg-black px-2 lg:px-6 py-4 border-b border-gray-900">
        <div className="mx-auto flex items-center justify-between">
          <div className="flex items-center cursor-pointer gap-2 lg:gap-4">
            <Logs
              size={24}
              className="text-white hidden sm:block cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
            <div className="leading-tight">
              <p className="text-white font-semibold text-2xl ">
                <span className="text-purple-600">{">_ ["}</span>
                <span>sudo</span>
                <span className="text-purple-600">{": :Ankit]"}</span>
                <span className="text-purple-500 font-normal text-4xl ">
                  {" "}
                  .
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/assets/resume.pdf"
              download
              className="hidden sm:inline-block border border-purple-600 px-6 py-2 text-sm font-semibold text-purple-500 shake-vertical"
            >
              RESUME
            </a>
            <Logs
              size={24}
              className="inline-block md:hidden text-white cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
        </div>
      </nav>

      <Sidebar
        open={open}
        setOpen={setOpen}
        scrollToSection={scrollToSection}
      />
    </React.Fragment>
  );
};

export default Navbar;

// import React from "react";
// import { Logs } from 'lucide-react'
// import Sidebar from "./sidebar";
// import { useScrollToSection } from "@/customHooks/useScrollToSection";

// const Navbar = () => {
//   const { open, setOpen, scrollToSection } = useScrollToSection();

//   return (
//     <React.Fragment>
//       <nav className="w-full bg-black px-2 lg:px-6 py-4 border-b border-gray-900">
//         <div className="mx-auto flex  items-center justify-between">
//           <div className="flex items-center cursor-pointer gap-2 lg:gap-4">
//             <Logs size={24} className="text-white" onClick={() => setOpen((prev) => !prev)} />
//             <div className="leading-tight">
//               <p className="text-white font-semibold text-2xl">{">_[sudo:: Ankit]"}
//                 <span className="text-purple-500 font-semibold text-4xl ">{" "}.</span>
//               </p>
//             </div>
//           </div>
//           <a
//             href="/assets/resume.pdf"
//             download
//             className="border border-purple-600 px-6 py-2 text-sm font-semibold text-purple-500 shake-vertical inline-block"
//           >
//             RESUME
//           </a>
//         </div>
//       </nav>
//       <Sidebar open={open} setOpen={setOpen} scrollToSection={scrollToSection} />
//     </React.Fragment>
//   );
// };

// export default Navbar;
