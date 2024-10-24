
import Header from "../../components/header/index";
import Footer from "../../components/footer/index"
import Button from "../../components/button/index";
import Image from "next/image";
import Container from "../../components/container"

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <section className="w-full flex items-center justify-around">
                    <div>
                        <p className="text-4xl mb-7 font-bold">Digite seus dados <br /> e veja as vagas <br /> mais próximas a você!</p>
                        <Button />
                    </div>
                    <figure>
                        <Image src="/home.jpg"
                            alt="Foto do Home"
                            width={300}
                            height={300} />
                    </figure>
                </section>
            </Container>
            <Footer />
        </>
    )
}