export function NumberOfCharacters({ characters }) {
  if (characters.length === 0) {
    return <p>Il n'y a pas de personnage</p>;
  }

  return <p>Il y a {characters.length} personnages</p>;
}