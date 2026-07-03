function Card(props) {
    return (
        <div className="group border-2 border-slate-200 w-[200px] px-8 py-10 rounded-2xl flex flex-col items-center bg-white shadow-sm hover:shadow-xl hover:border-blue-primary/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="mx-auto items-center justify-center flex mb-6 text-blue-primary bg-blue-primary/10 w-16 h-16 rounded-full group-hover:bg-blue-primary group-hover:text-white transition-colors duration-300 text-3xl">
                {props.icon}
            </div>
            <h3 className="text-center font-semibold text-xl font-poppins text-slate-800 group-hover:text-blue-primary transition-colors duration-300">
                {props.title}
            </h3>
        </div>
    )
}

export default Card