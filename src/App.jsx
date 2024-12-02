import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemContainer/ItemListContainer'

import './App.css'

function App() {

  return (
	<>
		<header>
			<Navbar />
		</header>
		<main>
			<ItemListContainer saludo={"Bienvenidos a mi tienda"}/>
		</main>
		
	</>
  )
}

export default App
