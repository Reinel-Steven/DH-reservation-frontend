import React, { useState } from 'react'
import { Categories } from "../model/categories"

export const SearchComponent = () => {

    // Estado para almacenar la categoria seleccionada
    const [categorySelected, setCategorySelected] = useState("");

    // Función para manejar el cambio de selección
    const handleChangeCategory = (event) => {
        setCategorySelected(event.target.value);
    };

    const handleSubmit = (event) =>{
        console.log("buscando los filtros")
    }
    return (
        <div   className="card-search" >
            <div className="row g-2">
                {/* Categories */}
                <div className="col-md-3">
                    <select
                        name='select-category'                    
                        className="form-select"
                        value={categorySelected}
                        onChange={handleChangeCategory}
                    >
                        <option value="">-- Categoria --</option>
                        {Categories.map((c) => (
                            <option key={c.id} value={c.nombre}>
                                {c.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Input de búsqueda por texto */}
                <div className="col-md-6">
                    <input
                        name='imput-search'
                        type="text"
                        className="form-control"
                        placeholder="Buscar por nombre..."
                    />
                </div>

                {/* Boton Buscar */}
                <div className="col-md-3">
                    <button name='button-search' type="date" onClick={handleSubmit} className="form-control" >Buscar</button>
                </div>
            </div>
        </div>
    )
}
