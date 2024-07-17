import { Star, Settings } from "lucide-react";
import profile from "../assets/profile.png";

export const RightSidebar = () => {
  return (
    <aside className=" bg-[#e1bdff] text-white py-4">
      <nav>
        <ul>
          <li className=" hover:bg-gray-700 flex items-center cursor-pointer">
            <img src={profile} alt="" className="h-6" />
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
            <Star className="w-6 h-6 mr-2" />
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
            <Settings className="w-6 h-6 mr-2" />
          </li>
          {/* Add more navigation items here */}
        </ul>
      </nav>
    </aside>
  );
};
