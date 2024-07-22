function Primary() {
    return (
        <div className="p-2 h-18 my-2 pl-10 flex space-x-36 items-center">
            <div className="p-2 border-b-4 border-blue-700">
                <div className="flex items-center space-x-2">
                    <img src="/icons/inbox.svg" width={18} className="mr-2" />
                    <span className="font-bold text-blue-700">Primary</span>
                </div>
            </div>
            <div className="flex items-center space-x-36">
                <div className="flex items-center space-x-2">
                    <img src="/icons/sell.svg" width={24} className="mr-3" />
                    <div>
                        <span className="font-semibold mr-2">Promotions</span>
                        <span className="ml-1 rounded-full bg-green-600 text-white text-xs px-2 py-0.5">1 new</span>
                        <div className="text-gray-500 text-sm">LinkedIn Job Alerts</div>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <img src="/icons/group.svg" width={24} className="mr-3" />
                    <div>
                        <span className="font-semibold mr-2">Social</span>
                        <span className="ml-1 rounded-full bg-blue-600 text-white text-xs px-2 py-0.5">1 new</span>
                        <div className="text-gray-500 text-sm">LinkedIn</div>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <img src="/icons/info.svg" width={24} className="mr-3" />
                    <div>
                        <span className="font-semibold mr-2">Updates</span>
                        <span className="ml-1 rounded-full bg-orange-600 text-white text-xs px-2 py-0.5">1 new</span>
                        <div className="text-gray-500 text-sm">Internshala</div>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <img src="/icons/forum.svg" width={24} className="mr-3" />
                    <div>
                        <span className="font-semibold">Forum</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Primary;