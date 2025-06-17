import { Link } from "react-router-dom"; // If using React Router
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa6"; // React Icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between px-4">
        
        {/* Logo / Branding */}
        <div className="flex items-center space-x-3">
          <img 
            src="https://res.cloudinary.com/dwf8ifbzs/image/upload/v1741282821/Pro_Nutrition-01-removebg-preview_thyf18.png" 
            alt="Pro Nutrition Logo" 
            className="w-10 h-10 object-contain"
          />
          <h2 className="text-2xl font-bold text-center md:text-left">Pro Nutrition</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-0">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/whey-proteins" className="hover:text-yellow-400 transition">Whey Proteins</Link>
          <Link to="/creatine" className="hover:text-yellow-400 transition">Creatine</Link>
          <Link to="/mass-gainers" className="hover:text-yellow-400 transition">Mass Gainers</Link>
          <Link to="/pre-workouts" className="hover:text-yellow-400 transition">Pre Workouts</Link>
          <Link to="/fat-burners" className="hover:text-yellow-400 transition">Fat Burners</Link>
          <Link to="/l-carnitine" className="hover:text-yellow-400 transition">L-Carnitine</Link>
          <Link to="/cla" className="hover:text-yellow-400 transition">CLA</Link>
          <Link to="/multi-vitamin" className="hover:text-yellow-400 transition">Multi-vitamin</Link>
        </div>

        {/* Social Media Links with Icons */}
        <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/share/18rE8fPTy5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://www.tiktok.com/@pro_nutrition__?_t=ZS-8uVSAKJfdAN&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition text-2xl">
            <FaTiktok />
          </a>
          <a href="https://www.instagram.com/pro_nutrition_store?igsh=MXR2Z2xtNnJ0aWdldg==" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition text-2xl">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4 text-sm flex flex-col md:flex-row md:justify-between items-center text-gray-400 px-6 md:px-12">
        <div className="text-left md:w-1/2 md:pr-6">
          <span className="block font-bold mb-1">Contact Info</span>
          <span className="block">+94 76 579 4062</span>
          <span className="block">Rawatawatta, Moratuwa, Sri Lanka</span>
        </div>
        <div className="text-right md:w-1/2 md:pl-6 mt-4 md:mt-0">
          <span>© {new Date().getFullYear()} Pro Nutrition. All rights reserved.</span>
          <span className="block">Web Design and Developed by StackNet</span>
          {/* White StackNet Logo as a Clickable Button */}
          <a 
            href="https://stacknet.tech/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 transition transform hover:scale-110 hover:opacity-80"
          >
            <img 
              src="https://res.cloudinary.com/dwf8ifbzs/image/upload/v1741405701/2Asset_2gf9_white_lojr1i.png" 
              alt="StackNet White Logo" 
              className="w-28 object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
