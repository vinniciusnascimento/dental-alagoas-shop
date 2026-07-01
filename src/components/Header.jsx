import logo from "../assets/LogoDentalPreto.png";
import InputPesquisa from "./InputPesquisa";
import CartButton from "./CartButton";

function Header() {
  return (
    <div className="flex flex-row items-center py-6 px-60 justify-between">
      <img className="w-36" src={logo} alt="Logo Dental Alagoas" />
      <InputPesquisa />
      <CartButton />
    </div>
  );
}

export default Header;
