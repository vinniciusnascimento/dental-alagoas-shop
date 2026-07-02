import { ArrowUpRight } from "lucide-react"

function Button(props) {
    return(
        <button className={`flex flex-row items-center gap-2 font-inter rounded-3xl font-bold text-white bg-blue-primary px-11 py-5 cursor-pointer transition-all hover:bg-transparent border-4 border-blue-primary hover:scale-102 ${props.className}`}>{props.content} <ArrowUpRight /></button>
    )
}

export default Button