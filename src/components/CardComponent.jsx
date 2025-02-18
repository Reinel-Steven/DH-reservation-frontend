import '../styles/CardComponent.css'

export const CardComponent = ({id, image, tittle, description, price, onClickView }) => {

    return (
        <div id={id} className="card">
            <img src={image} alt={tittle} className="card-img" />
            <div className="card-content">
                <h3 className="card-tittle">{tittle}</h3>
                <p className="card-description" title={description}>{description}</p>
                <p className="card-price">{price}</p>

                <button type="button"
                    className="add-button"
                    onClick={() =>onClickView()}
                > Ver detalle
                </button>
            </div>
        </div>
    )
}