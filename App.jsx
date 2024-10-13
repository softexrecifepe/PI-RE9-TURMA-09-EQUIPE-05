
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() { 

  return (
    <>
      <Header />
      <section className='container'>
        <div className='apresentacao'>
          <h2>React</h2>
          <p>
            O React é uma biblioteca JavaScript amplamente usada para construir
            interfaces de usuário (UI), desenvolvida pelo Facebook (agora Meta).
            Ele é popular entre os desenvolvedores devido à sua abordagem
            declarativa, baseada em componentes reutilizáveis e eficientes, que
            permitem a criação de interfaces dinâmicas e interativas.
          </p>
          <button className='btn'>Veja mais</button>
        </div>
        <figure>
          <img className='imgLogo' src='/reactLogo.png' alt='React'></img>
        </figure>
      </section>
      <Footer />
    </>
  );
}

export default App
