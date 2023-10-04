
function NbCharacters({characters}){
  const vide = characters.length > 0;
  
  return(
    vide ? <h1>Number of characters: {characters.length}</h1> : <h1></h1>
  
  );
}
    
export default NbCharacters;