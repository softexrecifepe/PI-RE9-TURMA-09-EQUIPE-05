import Button from "../Button/button";
import Image from "next/image";

export default function Container() {
    return (
        <section className="w-full min-h-screen flex items-center justify-around">
            <div>
                <p className="text-4xl mb-7 font-bold">Digite seus dados <br /> e veja as vagas <br /> mais próximas a você!</p>
                <Button />
            </div>
            <figure>
                <Image src="/home.jpg" 
                       alt="Foto do Home" 
                       width={300}
                       height={300}/>
            </figure>
        </section>
    )
}