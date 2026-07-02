import { Search } from "lucide-react";

function InputPesquisa() {
  return (
    <div className="flex flex-row items-center">
      <input
        className="outline-0 font-inter border-2 border-slate-300 p-3 rounded-l-xl border-r-0 w-2xl h-full"
        type="text"
        placeholder="O que você procura?"
      />
      <Search size={49} className="bg-blue-primary text-white p-3 rounded-r-xl" />
    </div>
  );
}

export default InputPesquisa;