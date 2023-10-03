import NbCharacters from './components/Compteur.js'
import ListeCharacters  from './components/Liste.js'
import Title from './components/Title.js'

const characters = require('./data/characters.json')

function App() {
return (
  <>
    <Title>Marvels characters</Title>
    <ListeCharacters characters={characters}/>
    <NbCharacters characters={characters}/>
  </>
);
}

export default App;
