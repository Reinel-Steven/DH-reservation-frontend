import '../styles/CardComponent.css'

export const CardComponent = ({id, image, tittle, category, brand, description, price, onClickView }) => {

    const lineas = description.split(',');
    const limit = lineas.slice(0, 10).join('<br />');

    return (
        <div id={id} className="card">
            <img src={image} alt={tittle} className="card-img" />
            <div className="card-content card-content-flex">
                <h3 className="card-tittle">{tittle}</h3>
                <div>
                <p className="card-description">{category}</p>
                <p className="card-description">{brand}</p>
                <div className='card-description' title={description} dangerouslySetInnerHTML={{ __html: limit }} />
                </div>
                <div>
                <p className="card-price">$ {price}</p>
                <button type="button"
                    className="add-button"
                    onClick={() =>onClickView()}
                > Ver detalle
                </button>
                </div>
            </div>
        </div>
    )
}