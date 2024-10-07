import PropTypes from 'prop-types';
import './card.css'

// Componente ProductCard que recebe props para valores dinâmicos
export default function ProductCard({ image, title, price, description }) {


  return (
    <div className="product-card">
      <a href="#">
        <img id="img-card" src={image} className="card-img" alt={title} />
      </a>
      <div className="card">
        <div className="card-text">
          {title}
          <h4>{price}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

// Define os tipos de props esperados pelo componente
ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

// Define valores padrões para as props (caso não sejam fornecidos)
ProductCard.defaultProps = {
  onButtonClick: () => { },
};
