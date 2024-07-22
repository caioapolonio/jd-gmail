import { Star, Settings } from "lucide-react";
import profile from "../assets/profile.png";

export const RightSidebar = () => {
  return (
    <aside className=" bg-[#F6F8FC] text-white py-5">
      <nav>
        <ul className="flex flex-col items-center">
          <li className=" flex items-center cursor-pointer mb-5">
            <img src={profile} alt="" width={26} />
          </li>
          <li className="p-4 flex items-center cursor-pointer">
            <img src="/icons/calendar.svg" alt="" width={26} />
          </li>
          <li className="p-4 flex items-center cursor-pointer">
            <img src="/icons/lamp.svg" alt="" width={19} />
          </li>
          <li className="p-4 flex items-center cursor-pointer">
            <img src="/icons/verified.svg" alt="" width={26} />
          </li>
          <li className="p-4 flex items-center cursor-pointer">
            <img src="/icons/people.svg" alt="" width={26} />
          </li>
          {/* Add more navigation items here */}
        </ul>
      </nav>
    </aside>
  );
};
