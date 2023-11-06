import NbCharacters from './components/Compteur.js'
import ListeCharacters  from './components/Liste.js'
import Title from './components/Title.js';
import { useLoaderData } from "react-router";

function Charac() {

  const characters = useLoaderData();
return (
  

  <>
    <br></br>
    <Title>Marvels characters</Title>
    <ListeCharacters characters={characters}/>
    <NbCharacters characters={characters}/>
  </>
);
}

export default Charac;