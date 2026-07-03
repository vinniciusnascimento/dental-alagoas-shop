import { ArrowRight } from "lucide-react"
import TitleSection from "./TitleSection"

function CategorySection(){
    return(
        <div>
            <TitleSection title="Compre por categoria" link="Ver todas as categorias" icon={<ArrowRight />} />
        </div>
    )
}

export default CategorySection