import { ArrowRight, Scissors, Package, MonitorCog, Smile, Gem, Grid2X2 } from "lucide-react"
import TitleSection from "./TitleSection"
import Card from "./Card"

function CategorySection() {
    return (
        <div>
            <TitleSection title="Compre por categoria" link="Ver todas as categorias" icon={<ArrowRight />} />
            <div className="flex flex-row px-60 gap-10 mt-6">
                <Card title="Instrumentais" icon={<Scissors size={40} />} />
                <Card title="Prótese" icon={<Gem size={40} />} />
                <Card title="Materiais de Consumo" icon={<Package size={40} />} />
                <Card title="Equipamentos" icon={<MonitorCog size={40} />} />
                <Card title="Instrumentais" icon={<Scissors size={40} />} />
                <Card title="Ortodontia" icon={<Smile size={40} />} />
                <Card title="Materiais de Consumo" icon={<Package size={40} />} />
                <Card title="Prótese" icon={<Gem size={40} />} />
                <Card title="Mais categorias" icon={<Grid2X2 size={40} />} />
            </div>
        </div>
    )
}

export default CategorySection