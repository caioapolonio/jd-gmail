import { useState } from "react";

function Email() {
    const data = [
        { sender: "Foxtale", subject: "The Starlet launches TOMORROW! 😍", preview: "Get Early Access with a special offer tomorrow. Tap to know all...", date: "Jun 9" },
        { sender: "Foxtale", subject: "The Starlet's Live Trial results are in!", preview: "50+ Front Foxers & 200+ Live viewers tried and tested the Starl...", date: "Jun 7" },
        { sender: "Meenakshi", subject: "FY2023-2024", preview: "FY Total CTC Gross CTC Variable 2022-2023 709880 674880 651840 35000 20...", date: "May 25" },
        { sender: "arzoo-khare", subject: "Invitation from an unknown sender: ADPList Mentoring Session | Arzoo Khare & Meenakshi Saxena @ Mo...", preview: "", date: "May 25" },
        { sender: "arpitjauhal17", subject: "Invitation from an unknown sender: ADPList Mentoring Session | Arpit Jauhal & Meenakshi Saxena @ Mo ...", preview: "", date: "May 23" },
        { sender: "Mount Talent Consul.", subject: "Job | Supply Chain Executive/Manager", preview: "The sender of this email is registered with Naukri.com as Mount ...", date: "May 23" },
        { sender: "Foxtale", subject: "A shipment from order #209148 is on the way", preview: "Order #209148 Your order is on the way Your order is o...", date: "May 23" },
        { sender: "Foxtale", subject: "Order #209148 confirmed", preview: "Order #209148 Thank you for your purchase! Hi Meenakshi, we're getting y...", date: "May 22" },
        { sender: "Foxtale", subject: "You've earned a new reward!", preview: "You've earned a new reward! Congratulations! You've earned Redeem Coin...", date: "May 22" },
        { sender: "Foxtale", subject: "Customer account confirmation", preview: "Welcome to Foxtale! You've activated your customer account. Next time...", date: "May 22" }
    ];

    const [clickedEmailIndices, setClickedEmailIndices] = useState([]);
    const [importantIconIndices, setImportantIconIndices] = useState([]);

    const handleCheckboxClick = (index) => {
        setClickedEmailIndices(prevState => (
            prevState.includes(index)
                ? prevState.filter(emailIndex => emailIndex !== index)
                : [...prevState, index]
        ));
    };

    const handleImportantIconClick = (index) => {
        setImportantIconIndices(prevState => (
            prevState.includes(index)
                ? prevState.filter(emailIndex => emailIndex !== index)
                : [...prevState, index]
        ));
    };

    return (
        <div>
            {data.map((email, index) => {
                const isClicked = clickedEmailIndices.includes(index);
                const isImportant = importantIconIndices.includes(index);
                return (
                    <div
                        key={index}
                        className={`p-2 grid grid-cols-[auto_260px_1fr_auto] gap-4 items-center border-b-2 border-gray-100 ${isClicked ? 'bg-slate-100' : ''}`}
                    >
                        <div className="flex items-center ml-8">
                            <img
                                src={isClicked ? "/icons/checkbox_checked.svg" : "/icons/checkbox_blank.svg"}
                                className="pr-4 cursor-pointer"
                                onClick={() => handleCheckboxClick(index)}
                            />
                            <img src="/icons/star.svg" className="pr-3" />
                            <img
                                src={isImportant ? "/icons/label_important_checked.svg" : "/icons/label_important_blank.svg"}
                                className={`transition-all delay-25 cursor-pointer ${isImportant ? 'fill-amber-300' : ''}`}
                                onClick={() => handleImportantIconClick(index)}
                            />
                        </div>
                        <div className={`transition-all delay-25 font-sans font-bold ml-8 ${isClicked ? 'font-normal' : ''}`}>{email.sender}</div>
                        <div className="font-sans">
                            <span className={`font-semibold ${isClicked ? 'font-normal' : ''}`}>{email.subject}</span>
                            <span className="text-zinc-400 ml-1">- {email.preview}</span>
                        </div>
                        <div className="text-gray-500 mr-8">{email.date}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default Email;
