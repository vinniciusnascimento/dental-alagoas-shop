import logo from "../assets/LogoDentalPreto.png";
import InputPesquisa from "./InputPesquisa";

function Header() {
  return (
    <div className="flex flex-row gap-9 items-center p-6">
      <img className="w-36" src={logo} alt="Logo Dental Alagoas" />
      <InputPesquisa />
    </div>
  );
}

export default Header;
