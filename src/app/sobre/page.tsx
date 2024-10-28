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
                        <p className="text-corDestaquePricipal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsam adipisci natus deleniti tempora amet eligendi quo repudiandae! Ipsum consequuntur tempore soluta aperiam exercitationem incidunt molestiae mollitia nobis eius earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente nemo debitis. Cupiditate sit sunt, repellendus nihil quia dolor sint iure voluptate sapiente in harum voluptatem commodi nesciunt iste! Doloremque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo reprehenderit ad tempora unde deserunt culpa? Suscipit eos nemo corrupti laudantium illo beatae recusandae maiores praesentium? Tempore harum voluptates consequuntur consequatur!Lorem</p>
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