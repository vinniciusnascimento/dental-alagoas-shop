import { ShoppingCart } from "lucide-react";

function CartButton() {
    return (
        <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-400/10 p-3 rounded-lg transition-all">
            <ShoppingCart size={36} className="text-blue-primary" />

            <div className="flex items-start">
                <p className="font-semibold font-inter whitespace-nowrap">
                    Meu carrinho
                </p>

                <span className="relative font-inter -top-2 ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-primary text-md font-semibold text-white">
                    0
                </span>
            </div>
        </div>
    );
}

export default CartButton;