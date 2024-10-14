export default function Header(){
    return (
        <header className="w-full h-16 bg-secondary flex items-center justify-around">
            <span className="text-2xl font-bold">Empregue</span>
            <nav>
                <a href="#" className="px-6 hover:bg-terceary">Home</a>
                <a href="#" className="px-6 hover:bg-terceary">Sobre</a>
                <a href="#" className="px-6 hover:bg-terceary">Cadastre-se</a>
                <a href="#" className="px-6 hover:bg-terceary">Contato</a>
            </nav>
        </header>
    )
}