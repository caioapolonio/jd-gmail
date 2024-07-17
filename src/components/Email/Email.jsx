function Email() {

    const data = [
        {sender: "Foxtale", subject:"The Starlet launches TOMORROW! 😍", date: "Jun 9"}, {sender: "Foxtale", subject: "The Starlet's Live Trial results are in!", date: "Jun 9"}
    ]

    return (
    <div className="border-b-2 border-gray-100">
        <div className="flex justify-between ml-5 mr-5 p-2">
            <span className="flex justify-between">
                <img src="src/assets/icons/checkbox_blank.svg" />
                <img src="src/assets/icons/star.svg" />
                <img src="src/assets/icons/label_important.svg" />
            </span>
            <div className="font-sans">
                <span className="font-bold">{data.sender}</span>
                <span className="">-</span>
                <span className="font-semibold text-zinc-500">{data.subject}</span>
                <span>Jun 9</span>
            </div>
        </div>
    </div>
    )
}

export default Email;