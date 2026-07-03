import { ShoppingCart } from "lucide-react"
import logo from "../assets/clareador-whiteness.png"

function Product(props) {
    return (
        <div className="border-2 border-slate-200 flex flex-col font-inter rounded-lg">
            <img src={logo} alt="Imagem Produto" className="w-60 mx-auto" />
            <div className="px-6">
                <h4 className="text-xl font-bold text-blue-900 leading-3">Nome do produto</h4>
                <p className="text-sm text-gray-400 font-semibold">Medix</p>
                <h3 className="font-bold text-blue-950 text-2xl mt-2">R$ 29,90</h3>
                <p className="font-medium text-gray-400 text-sm">Em até 3x de R$9,97</p>
                <button className="cursor-pointer flex justify-center gap-2 font-bold py-2 mt-1 mb-5 rounded-lg flex-row bg-blue-primary text-white w-full"><ShoppingCart /> Comprar</button>
            </div>
        </div>
    )
}

export default Product