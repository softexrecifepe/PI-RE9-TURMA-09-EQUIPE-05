import Header from "../../components/header/index";
import Footer from "../../components/footer/index"



export default function Home() {
    return (
        <>
            <Header />            
                <section className="w-auto min-h-screen bg-cover flex items-center justify-around bg-home-image">
                    <div>
                        <p className="text-4xl mb-7 font-bold">Digite seus dados <br /> e veja as vagas <br /> mais próximas a você!</p>
                        
                    </div>
                    {/* <Image
                        src="/imagens/home.png"
                        alt="home"
                        width={300}
                        height={300}
                    /> */}
                </section>            
            <Footer />
        </>
    )
}