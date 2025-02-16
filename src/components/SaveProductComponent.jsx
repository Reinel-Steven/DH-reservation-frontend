import React from 'react'
import { useState } from 'react';
import { CartContext } from '../context/CartContext';

export const SaveProductComponent = ({selectProduct}) => {

  const product = selectProduct;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Producto creado:", product);
  };

  const [tittle, setTittle] = useState(product.tittle)
  const [category, setCategory] = useState(product.category)
  const [brand, setBrand] = useState(product.brand)
  const [description, setDescription] = useState(product.description)
  const [price, setPrice] = useState(product.price)
  const [image, setImage] = useState(product.image)

  const onInputTittleChange = ({ target }) => { setTittle(target.value); }
  const onInputDescriptionChange = ({ target }) => { setDescription(target.value); }
  const onInputPriceChange = ({ target }) => { setPrice(target.value); }
  const onInputImageChange = ({ target }) => { setImage(target.value); }

  return (
      <form onSubmit={handleSubmit} >
        <div className="card-header row">
          <div className='card-tittle col-6'>
            <img src={image} alt={tittle} className="row card-img" />
            <button onClick={onInputImageChange} >Agregar Imagen</button>
          </div>
          <div className="card-body col-6">
            <input type="text"
              className="form-control row"
              name="tittle" id="tittle"
              value={tittle}
              onChange={onInputTittleChange}
              required
            />

            <imput type="text"
              className="form-control row"
              name="description" id="description"
              defaultValue={description}
              onChange={onInputDescriptionChange}
              required
            />

            <imput type="number"
              className="form-control row"
              defaultValue={price}
              name="price" id="price"
              onChange={onInputPriceChange}
              required
            />

            <button type="button"
              className="add-button"
            > Modificar
            </button>
          </div>
        </div>
      </form>
  )
}
