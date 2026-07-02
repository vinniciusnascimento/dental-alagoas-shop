function Button(props) {
    return(
        <button className={`font-inter rounded-3xl font-bold text-white bg-blue-primary px-14 py-5 cursor-pointer transition-all hover:bg-transparent border-4 border-blue-primary hover:scale-102 ${props.className}`}>{props.content}</button>
    )
}

export default Button