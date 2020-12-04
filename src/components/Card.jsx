import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";




const PeliculaCard = ({movie}) => (

    <div className = 'Card'>   
        <Card>
            <Card.Img 
                variant="top" 
                src={movie.Poster} 
                alt={movie.Title} 
                />
            <Card.Body>
                <Card.Title>{`${movie.Title}`}</Card.Title>
                <p>{`Año de estreno:${movie.Year}`}</p>
                <p>{`Type:${movie.Type}`}</p>
            </Card.Body>
        </Card>
    </div>   
);

//Agrego prototype para que todos los datos de la api hereden del objeto movie.

Card.propTypes ={
    movie: PropTypes.shape({
    id: PropTypes.string,
    Title: PropTypes.string,
    Poster: PropTypes.string,
    Year: PropTypes.string,
    Type: PropTypes.string,
    }).isRequired,
};

export default PeliculaCard;