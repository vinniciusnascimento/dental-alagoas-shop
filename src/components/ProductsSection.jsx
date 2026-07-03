import Product from "./Product"
import TitleSection from "./TitleSection"

function ProductsSection() {
    return (
        <div>
            <TitleSection title="Produtos" />
            <div className="grid grid-cols-5 px-60 gap-10">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default ProductsSection