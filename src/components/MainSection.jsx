import mascot from "../assets/mascotMainSection.png";
import Button from "./Button";

function MainSection() {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/30 to-transparent z-10" />
            <div className="z-20 bg-linear-to-b from-[#00215D] to-[#002D76] w-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:pl-24 xl:pl-40 2xl:pl-60 py-16 lg:py-0 gap-10 lg:gap-0">
                <div className="w-full lg:w-3/5 relative z-20 text-center lg:text-left">
                    <h1 className="flex flex-col text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold font-poppins leading-tight lg:leading-27">
                        Tudo o que{" "}
                        <span className="text-blue-primary">
                            sua clínica precisa,
                        </span>{" "}
                        em um só lugar.
                    </h1>
                    <p className="text-[#cdcdcd] mt-3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-poppins max-w-full lg:max-w-2xl xl:max-w-4xl mx-auto lg:mx-0">
                        Materiais, instrumentais e equipamentos odontológicos{" "}
                        <span className="text-blue-primary font-bold">melhores marcas.</span>
                    </p>

                    <Button
                        content="Ver Produtos"
                        className="mt-8 lg:mt-14 font-poppins font-medium text-base sm:text-lg lg:text-xl"
                    />
                </div>

                <img
                    src={mascot}
                    alt="Mascote Dental Alagoas"
                    className="w-1/2 sm:w-2/5 lg:w-2/5 max-w-xs sm:max-w-sm lg:max-w-none mt-4 lg:mt-0"
                />
            </div>
        </div>
    )
}

export default MainSection