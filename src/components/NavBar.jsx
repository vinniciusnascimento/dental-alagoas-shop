import { Menu } from "lucide-react"

function NavBar() {
    return (
        <div className="flex flex-row w-screen">
            <button className="bg-blue-800 flex flex-row items-center hover:text-slate-400 transition-all cursor-pointer w-1/8 border-r-2 border-slate-700 py-4 gap-2 justify-center text-center outline-0 border-0">
                <Menu className="text-white" />
                <p className="text-white text-lg font-inter">Todas as categorias</p>
            </button>
            <nav className="bg-blue-700 w-full font-inter font-normal items-center px-8 text-white flex flex-row gap-8">
                <a href="#" className="hover:text-slate-400 transition-all">Início</a>
                <a href="#" className="hover:text-slate-400 transition-all">Ofertas</a>
                <a href="#" className="hover:text-slate-400 transition-all">Lançamentos</a>
                <a href="#" className="hover:text-slate-400 transition-all">Marcas</a>
                <a href="#" className="hover:text-slate-400 transition-all">Blog</a>
                <a href="#" className="hover:text-slate-400 transition-all">Contato</a>
            </nav>
        </div>
    )
}

export default NavBar