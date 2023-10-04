function ListeCharacters({characters}){
  const vide = characters.length > 0;

    return(
    
    vide ? <ul>
          {characters.map((item, index) => (
            <li key={index}>{item.name}</li> 
          ))}
          </ul> : "Il n'y a pas de caractères");
          }

export default ListeCharacters;