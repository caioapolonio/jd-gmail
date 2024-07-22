import { Mail, Inbox, Menu } from "lucide-react";

export const LeftSidebar = () => {
  return (
    <aside className="w-64 bg-[#e1bdff] py-7 text-black">
      <div className="flex flex-row gap-6 px-4 items-center">
        <Menu className="w-7  cursor-pointer" />
        <Mail className="w-6 h-6" />
        <h1 className="text-xl font-bold">Gmail</h1>
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
            <Inbox className="w-6 h-6 mr-2" />
            <span>Inbox</span>
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
            <Mail className="w-6 h-6 mr-2" />
            <span>Sent</span>
          </li>
          {/* Add more navigation items here */}
        </ul>
      </nav>
    </aside>
  );
};
