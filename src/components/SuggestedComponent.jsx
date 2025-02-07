import React from 'react'

export const SuggestedComponent = () => {

    const items = Array.from({ length: 16 }, (_, index) => ({
        id: index,
        title: `Producto ${index + 1}`,
        description: "Descripción breve del producto.",
        image: "/placeholder.png" // Reemplaza con la ruta de la imagen real
      }));

  return (
    <>
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {items.map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
