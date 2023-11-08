export function NumberOfCharacters({ characters = [] }) {
  return (
    <p>
      Il y a {characters.length === 0 ? 'no' : characters.length} character{characters.length !== 1 ? 's' : ''}
    </p>
  );
}
