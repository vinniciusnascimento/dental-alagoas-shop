import mascot from "../assets/mascotMainSection.png";
import Button from "./Button";

function MainSection() {
    return (
        <div className="bg-linear-to-b from-[#00215D] to-[#002D76] w-screen flex items-center justify-between pl-60">
            <div className="w-3/5">
                <h1 className="flex flex-col text-8xl text-white font-bold font-poppins leading-27">
                    Tudo o que{" "}
                    <span className="text-blue-primary">
                        sua clínica precisa,
                    </span>{" "}
                    em um só lugar.
                </h1>
                <p className="text-[#cdcdcd] mt-3 text-3xl font-medium font-poppins w-6xl">Materiais, instrumentais e equipamentos odontológicos{" "}
                <span className="text-blue-primary font-bold">melhores marcas.</span></p>

                <Button content="Ver Produtos" className="mt-14 font-poppins font-medium text-xl" />
            </div>

            <img
                src={mascot}
                alt="Mascote Dental Alagoas"
                className="w-2/5"
            />
        </div>
    )
}

export default MainSection