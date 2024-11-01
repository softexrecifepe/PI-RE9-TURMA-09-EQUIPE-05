import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";


export default function Sobre() {
    return (
        <>
            <Header />
            <div className="pt-14 pl-8 min-h-screen flex flex-wrap w-full bg-custom-gradient">
                <div className="w-1/2 text-justify px-8">
                    <h1 className="text-2xl font-bold text-corSecundaria ">Sobre</h1>
                    <p className="text-corDestaquePricipal text-lg">Em nossa plataforma, conectamos talentos a oportunidades de trabalho, promovendo um encontro enriquecedor entre candidatos e empresas de todas as regiões. Com o objetivo de transformar a experiência de busca de emprego, nossa solução é desenvolvida com foco em agilidade, acessibilidade e personalização. 
                    <br />
                        Nossa missão é tornar a contratação mais simples para empresas e ajudar profissionais de todos os níveis a encontrar vagas ideais, próximas de onde estão. Com uma plataforma intuitiva e filtros regionais, oferecemos uma experiência personalizada, ajudando candidatos a descobrir empregos que se ajustem às suas necessidades locais.
                        <br />
                        <br />
                        Descubra sua próxima oportunidade com a EMPREGUE e faça parte do futuro do mercado de trabalho. Aqui, acreditamos que talento e oportunidade devem estar ao alcance de todos!</p>
                </div>
                <div className="w-1/2 pl-14 mt-6">
                    <Image
                        src="/imagens/sobre.png"
                        alt="Sobre"
                        width={500}
                        height={300}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}