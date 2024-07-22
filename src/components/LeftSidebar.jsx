export const LeftSidebar = () => {
  return (
    <aside className="w-64 bg-[#F6F8FC] py-5 text-black flex flex-col gap-4">
      <div className="flex flex-row gap-6 px-4 items-center">
        <img src="/icons/menu.svg" width={30} />
        <img src="/icons/gmail.ico" width={35} />
        <h1 className="text-xl font-normal text-[#4A4D4C]">Gmail</h1>
      </div>
      <div className="px-4">
        <button className="bg-[#C2E7FF] flex flex-row px-6 py-5 rounded-xl items-center gap-2">
          <img src="/icons/pen.svg" alt="" width={32} />
          <span className="font-medium">Compose</span>
        </button>
      </div>
      <nav>
        <ul className="max-w-[90%] mb-3">
          <li className="flex items-center cursor-pointer bg-[#D3E3FD] rounded-r-full font-bold justify-between px-3 py-2">
            <div className="flex flex-row items-center gap-2">
              <img src="/icons/sideInbox.svg" width={24} />
              <span>Inbox</span>
            </div>
            <div className="text-sm">7,152</div>
          </li>
          <li className="flex items-center cursor-pointer px-3 py-2 gap-2">
            <img src="/icons/snoozed.svg" width={24} />
            <span>Snoozed</span>
          </li>
          <li className="  flex items-center cursor-pointer px-3 py-2 gap-2">
            <img src="/icons/sent.svg" width={24} />
            <span>Sent</span>
          </li>
          <li className="flex items-center cursor-pointer rounded-r-full font-bold justify-between px-3 py-2">
            <div className="flex flex-row items-center gap-2">
              <img src="/icons/draft.svg" width={24} />
              <span>Drafts</span>
            </div>
            <div className="text-sm">90</div>
          </li>
          <li className="  flex items-center cursor-pointer px-4 gap-3 py-2">
            <img src="/icons/more.svg" width={13} />
            <span>More</span>
          </li>
        </ul>
        <div className="text-[#1C1B1FB8] font-medium">
          <h2 className="px-3 py-2">Labels</h2>
          <ul>
            <li className="flex items-center cursor-pointer rounded-r-full font-bold justify-between px-3 py-2">
              <div className="flex flex-row items-center gap-2">
                <img src="/icons/label.svg" width={24} />
                <span>Done</span>
              </div>
              <div className="text-sm">13</div>
            </li>
            <li className="flex items-center cursor-pointer rounded-r-full font-bold justify-between px-3 py-2">
              <div className="flex flex-row items-center gap-2">
                <img src="/icons/label.svg" width={24} />
                <span>Jobs</span>
              </div>
              <div className="text-sm">21</div>
            </li>
            <li className="  flex items-center cursor-pointer px-3 py-2 gap-2">
              <img src="/icons/label.svg" width={24} />
              <span>Sumit sir</span>
            </li>
            <li className="  flex items-center cursor-pointer px-4 py-2 gap-2">
              <img src="/icons/more.svg" width={13} />

              <span>More</span>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};
