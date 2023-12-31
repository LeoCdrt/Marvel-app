import PropTypes from "prop-types";
import { parseISO,format } from "date-fns";
function CharacterDetail({ character = {} }) {

  return (
      <div>
          <h2>{character.name}
          <small>- {character.modified && format(parseISO(character.modified), "MMMM d, yyyy")}</small></h2>
          {
              // if character.thumbnail is not null, then render the image
              character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />
          }
          <p>{character.description}</p>
          <p>{character.modified}</p>
      </div>
  );
}

CharacterDetail.propTypes = {
    character : PropTypes.shape({
        name: PropTypes.string,
        thumbnail: PropTypes.shape({
            path: PropTypes.string,
            extension: PropTypes.string,
        }),
        description: PropTypes.string,
        modified: PropTypes.string,
    })
};

export default CharacterDetail;
