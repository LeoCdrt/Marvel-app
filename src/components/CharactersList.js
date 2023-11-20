import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        {character.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
CharactersList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })
    ),
};
