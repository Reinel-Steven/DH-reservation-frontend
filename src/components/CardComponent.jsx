import { useContext } from 'react';
import '../styles/CardComponent.css'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const CardComponent = ({ product, image, tittle, description, price, onClickView }) => {

    const { setSelectProduct } = useContext(CartContext)
    const navigate = useNavigate();
    const handleViewProduct = (product) => {
        setSelectProduct(product);
        console.log("Titulo " + product.price);
        navigate('/detail-product');
    }

    return (
            <div className="card">
                <img src={image} alt={tittle} className="card-img" />
                <div className="card-content">
                    <h3 className="card-tittle">{tittle}</h3>
                    <p className="card-description" title={description}>{description}</p>
                    <p className="card-price">{price}</p>

                    <button type="button"
                        className="add-button"
                        onClick={() => handleViewProduct(product)}
                    > Ver detalle
                    </button>
                </div>
            </div>
    )
}