function ListeCharacters({characters}){
    return(<ul>
          {characters.map((item, index) => (
            <li key={index}>{item.name}</li> 
          ))}
          </ul>);
          }

export default ListeCharacters;