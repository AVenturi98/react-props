import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"
import { posts } from "./posts"

function App() {

  console.log(posts)


  return (
    <>
      <Header />
      <div className="flex">
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default App



/*
Esercizio

Prendendo ispirazione dal layout fornito in allegato, creare la pagina iniziale di un blog con un post inserito al suo interno. Assicuratevi di suddividere il layout in componenti appropriati.

Step per creare il progetto:

Creiamo un progetto React utilizzando vite npm create vite@latest .

Installiamo le dipendenze npm install

Lanciamo il server di sviluppo npm run dev

Creiamo una cartella components nella quale inseriremo i nostri componenti

BONUS:

Invece di utilizzare un unico file index.css separiamo lo style utilizzando i CSS Modules 

*/