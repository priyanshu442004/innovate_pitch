import { NavLink } from "react-router-dom";
import { Star } from "lucide-react";
import logo from "../assets/logo.jpeg";

// const Navbar = () => {
//   return (
//     <nav className=" border-b border-gray-200 fixed top-0 left-0 w-full bg-white z-[999999]">
//       <div className="max-w-8xl mx-auto px-10 py-4 flex items-center w-full">
//         {/* LEFT */}
//         <div className="flex items-center gap-2">
//         <NavLink to="/"><img src={logo} alt="InnovativePitch" className="h-8 w-auto" /></NavLink>   
//           <span className="font-bold text-gray-800 text-base">
//             <NavLink to="/">InnovativePitch</NavLink>
//           </span>
//         </div>

//         {/* MIDDLE */}
//         <div className="flex-1 flex justify-center">
//           <div className="flex items-center gap-10 text-md text-gray-600">
//             <NavLink
//               className="hover:text-gray-900 font-semibold"
//               to="/features"
//             >
//               Features
//             </NavLink>

//             <NavLink
//               className="hover:text-gray-900 font-semibold"
//               to="/testimonial"
//             >
//               Testimonials
//             </NavLink>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-6 text-sm text-gray-600">
//           <NavLink className="font-semibold hover:text-gray-900" to="/solution">
//             Solutions
//           </NavLink>

//           <NavLink className="font-semibold hover:text-gray-900 " to="/pricing">
//             Pricing
//           </NavLink>

//           <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-bold">
//             <Star size={18} />
//             <span>
//               {" "}
//               <NavLink to="/login">Login</NavLink>{" "}
//             </span>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {

   // a reusable function for active link styling
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "font-semibold text-blue-600 border-b-2 border-blue-600 pb-1" 
      : "font-semibold text-gray-600 hover:text-gray-900"; 
  return (
    <nav className="border-b border-gray-200 fixed top-0 left-0 w-full bg-white z-[999999]">
      <div className="max-w-8xl mx-auto px-10 py-4 flex items-center w-full">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img src={logo} alt="InnovativePitch" className="h-8 w-auto" />
          </NavLink>
          <span className="font-bold text-gray-800 text-base">
            <NavLink to="/" >
              InnovativePitch
            </NavLink>
          </span>
        </div>

        {/* MIDDLE */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-10 text-md">
            <NavLink to="/features" className={getLinkClass}>
              Features
            </NavLink>
            <NavLink to="/testimonial" className={getLinkClass}>
              Testimonials
            </NavLink>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <NavLink to="/solution" className={getLinkClass}>
            Solutions
          </NavLink>
          <NavLink to="/pricing" className={getLinkClass}>
            Pricing
          </NavLink>

          <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-bold">
            <Star size={18} />
            <span>
              <NavLink to="/login" className={getLinkClass}>
                Login
              </NavLink>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
