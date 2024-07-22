import {
  Info,
  LayoutGrid,
  Search,
  Settings,
  SlidersVertical,
} from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-[#F6F8FC] text-black flex items-center py-4 justify-between ">
      <div className="flex items-center bg-[#EAF1FB] rounded-full  p-2 w-2/3">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search mail"
          className="flex-1 bg-transparent outline-none"
        />
        <SlidersVertical className="w-5 h-5 text-gray-500 ml-2" />
      </div>
      <div className="flex flex-row gap-8">
        <Info />
        <Settings />
        <LayoutGrid className="mr-8" />
      </div>
    </header>
  );
};
