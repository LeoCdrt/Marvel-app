import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { parseISO,format } from "date-fns";

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        <strong>{character.name} </strong>
                        <small>
                     {/* - {character.modified && format(parseISO(character.modified), "MMMM d, yyyy")} */}
                     </small>
                    </Link>
                    
                </li>
            ))}
        </ul>
    );
}
CharactersList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            // date : PropTypes.date,
        })
    ),
};
