import { useState } from "react";

import {
  Bell,
  ChevronDown,
  Menu,
  MessageSquareMore,
  Search,
  Home,
  Briefcase,
  Calendar,
  Users,
  LayoutDashboard,
  UserPlus,
  Settings,
  Settings2,
  Settings2Icon,
  Headset,
} from "lucide-react";
import Email from "./Email/Email";
import Primary from "./Primary/Primary";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <aside className="bg-[#FAFAFA] border-r border-[#f1f1f1] h-full hidden sm:flex sm:w-24 lg:w-60 flex-col lg:px-7 py-7 items-center gap-12 ">
        <h1 className="text-2xl font-semibold text-[#FF5151]">
          <span className="hidden lg:inline">Contrata </span>;D
        </h1>

        <nav className="flex flex-col gap-4  text-base font-medium text-[#686868]/50 ">
          <p className="text-xs">
            <span className="hidden sm:inline">MENU </span>
            <span className="hidden lg:inline">PRINCIPAL</span>
          </p>

          <a
            href="#"
            className="flex justify-center lg:justify-normal gap-4  py-2 w-full text-[#FF5151] "
          >
            <LayoutDashboard size={24} />
            <span className="hidden lg:inline">Dashboard</span>
          </a>
          <a
            href="#"
            className="flex justify-center lg:justify-normal gap-4  py-2 w-full"
          >
            <UserPlus size={24} />
            <span className="hidden lg:inline">Recrutamento</span>
          </a>
          <a
            href="#"
            className="flex justify-center lg:justify-normal gap-4  py-2 w-full"
          >
            <Calendar size={24} />
            <span className="hidden lg:inline">Agendamento</span>
          </a>
          <a
            href="#"
            className="flex justify-center lg:justify-normal gap-4  py-2 w-full"
          >
            <Users size={24} />
            <span className="hidden lg:inline">Colaboradores</span>
          </a>
        </nav>
        <nav className="flex-1 flex flex-col gap-4  text-base font-medium text-[#686868]/50 ">
          <p className=" text-xs hidden sm:flex">OUTROS</p>

          <a
            href="#"
            className="flex justify-center lg:justify-normal gap-4 py-2 w-full  "
          >
            <Headset size={24} />
            <span className="hidden lg:flex">Suporte</span>
          </a>
          <a
            href="#"
            className="flex justify-center lg:justify-normal gap-4 py-2 w-full"
          >
            <Settings size={24} />
            <span className="hidden lg:inline">Configurações</span>
          </a>
        </nav>
      </aside>
      <div className="flex-1 bg-white">
        <header className="bg-white p-4 border-b border-[#f1f1f1] flex flex-row justify-between items-center">
          <div className="flex gap-5 justify-between items-center">
            <Menu className="sm:hidden" size={18} />
            <div className="hidden sm:flex border rounded-md px-4 py-1.5 items-center w-60">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar"
                className="h-full w-full outline-none"
              />
              <Search size={18} />
            </div>
            <Search className="sm:hidden" size={18} />
          </div>
          <div className="flex gap-5 justify-between items-center">
            <Bell size={18} />
            <MessageSquareMore size={18} />
            <div className="flex justify-between items-center gap-2">
              <p className="hidden lg:inline text-base text-[#161E54] font-medium">
                Iago Maciel
              </p>
              <ChevronDown size={18} />
            </div>
          </div>
        </header>
        <main>{children}
        <Primary />
        <Email />
        <Email />
        <Email />
        <Email />
        <Email />
        </main>
      </div>
    </div>
  );
};

export default Layout;
