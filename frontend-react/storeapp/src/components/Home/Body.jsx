
import ProductCard from '../utils/Card';
import Button from '../utils/Button';
import imageCard from '../../images/Designsemnome_51-Photoroom.png';
import imageCard2 from '../../images/Água Perfumada Chá Branco 1,1L_arquivos/image4.png';
import imageCard3 from '../../images/Água Perfumada Chá Branco 1,1L_arquivos/image2.png';
import imageCard4 from '../../images/Água Perfumada Chá Branco 1,1L_arquivos/image3.png';
import './Body.css';
import '../utils/Card'
import SearchBar from '../utils/SearchBar'
import NavBar from '../utils/NavBar';


export default function Body() {

  const products = [
    {
      image: imageCard,
      title: 'Fressia Eau Cologne 100ml',
      price: 'R$ 69,90',
      description: 'ou 3x de R$ 24,11 com juros Cartão de Crédito - PagBank',
    },
    {
      image: imageCard2,
      title: 'Fressia Eau Cologne 100ml',
      price: 'R$ 69,90',
      description: 'ou 3x de R$ 24,11 com juros Cartão de Crédito - PagBank',
    },
    {
      image: imageCard3,
      title: 'Fressia Eau Cologne 100ml',
      price: 'R$ 69,90',
      description: 'ou 3x de R$ 24,11 com juros Cartão de Crédito - PagBank',
    },
    {
      image: imageCard4,
      title: 'Fressia Eau Cologne 100ml',
      price: 'R$ 69,90',
      description: 'ou 3x de R$ 24,11 com juros Cartão de Crédito - PagBank',
    },
  ];
  const onButtonClick = {}

  return (
    <>
    <NavBar />
    <SearchBar />
      <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div className="bg-dark p-4">
          <h5 className="text-body-emphasis h4">Collapsed content</h5>
          <span className="text-body-secondary">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <div className="main-center-text" style={{ height: '20vh', paddingTop: '20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
          Veja produtos selecionados especialmente para você
        </h1>
      </div>
      <div className='' style={{display: 'flex', margin: '20px'}}>
      </div>  
      <div className="body-container">
        <div className="product-container">
          <div className="product-content row">
            {products.map((product, index) => (
              <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4" key={index} id='card-container'>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  onButtonClick={() => console.log(`Clicked on ${product.title}`)}
                />
                <Button onClick={onButtonClick} color="success" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
