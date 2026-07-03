function TitleSection(props) {
    return (
        <div className="flex flex-row justify-between px-60 items-center pt-10 pb-5">
            <h2 className="font-semibold text-4xl">{props.title}</h2>
            <div className="flex flex-row text-blue-primary items-center text-xl cursor-pointer gap-2">
                <p>{props.link}</p>
                <div>{props.icon}</div>
            </div>
        </div>
    )
}

export default TitleSection