import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";
import { Header } from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <LeftSidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <div className="rounded-lg bg-white shadow p-6">{children}</div>
        </main>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Layout;
