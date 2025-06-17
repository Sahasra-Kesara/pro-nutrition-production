import { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const categories = useMemo(
    () => [
      { name: "Shop", path: "/" },
      { name: "Creatine", path: "/creatine" },
      { name: "Whey Proteins", path: "/whey-proteins" },
      { name: "Mass Gainers", path: "/mass-gainers" },
      { name: "Pre Workouts", path: "/pre-workouts" },
      { name: "Fat Burners", path: "/fat-burners" },
      { name: "L-Carnitine", path: "/l-carnitine" },
      { name: "CLA", path: "/cla" },
      { name: "Multi-vitamin", path: "/multi-vitamin" },
    ],
    []
  );

  return (
    <nav className="bg-black text-white shadow-lg">
      {/* Top Section - Logo with Text and Contact Info */}
      <div className="py-4 flex justify-between items-center px-4 md:px-10">
        <div className="flex items-center space-x-3">
          <img
            src="https://res.cloudinary.com/dwf8ifbzs/image/upload/v1741282821/Pro_Nutrition-01-removebg-preview_thyf18.png"
            alt="Pro Nutrition Logo"
            className="h-24 w-24 object-contain"
          />
          <h1 className="text-2xl font-extrabold tracking-wide md:text-3xl">
            PRO NUTRITION
          </h1>
        </div>

        {/* Right Section - Contact Info */}
        <div className="hidden md:flex flex-col text-right text-sm md:text-base">
          <span><strong>+94 76 579 4062</strong></span>
          <span>Rawatawatta, Moratuwa, Sri Lanka</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Bottom Section - Navigation */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center space-x-6">
            {categories.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-red-400 transition text-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`md:hidden fixed top-0 left-0 w-64 h-full bg-gray-800 transition-transform duration-300 ${
              isOpen ? "transform translate-x-0" : "transform -translate-x-full"
            } z-50`}
          >
            <div className="flex justify-end p-4">
              <button
                className="text-white text-2xl"
                onClick={toggleMenu}
                aria-label="Close sidebar"
              >
                ✖
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-10">
              {categories.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-white text-lg hover:text-red-400 transition"
                  onClick={toggleMenu} // Close sidebar when item is clicked
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Info at the Bottom of Sidebar */}
            <div className="mt-8 px-4 py-4 text-center text-sm text-white">
              <span><strong>+94 76 579 4062</strong></span>
              <p>Rawatawatta, Moratuwa, Sri Lanka</p>
            </div>
          </div>

          {/* Backdrop to close sidebar when clicked outside */}
          <div
            className={`md:hidden fixed inset-0 bg-black bg-opacity-50 ${
              isOpen ? "block" : "hidden"
            } z-40`}
            onClick={toggleMenu}
          ></div>
        </div>
      </div>
    </nav>
  );
}
