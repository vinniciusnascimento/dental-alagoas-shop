import logo from "../assets/LogoDentalPreto.png";
import InputPesquisa from "./InputPesquisa";
import CartButton from "./CartButton";
import NavBar from "./NavBar";

function Header() {
  return (
    <div>
      <div className="flex flex-row items-center py-6 px-60 justify-between border-t-30 border-blue-800">
        <img className="w-46 cursor-pointer" src={logo} alt="Logo Dental Alagoas" />
        <InputPesquisa />
        <CartButton />
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
