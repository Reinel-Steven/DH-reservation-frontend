
import './ReservationApp.css'
import { ProductProvider } from './context/ProductProvider'
import { CartProvider } from './context/CartProvider'
import { UploadFileProvider } from './context/UploadFileProvider'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductsPage } from './pages/ProductsPage'
import { CreateProductPage } from './pages/Admin/CreateProductPage'
import { ListProductsPage } from './pages/Admin/ListProductsPage'
import { DetailProductPage } from './pages/Admin/DetailProductPage'
import { NavBarComponent } from './components/NavBarComponent'
import { FooterComponent } from './components/FooterComponent'


export const ReservationApp = () => {

  return (
    <>
      <ProductProvider>
        <CartProvider>
          <UploadFileProvider>
          <NavBarComponent />
          <Routes>
            <Route path="/" element={<ProductsPage />} ></Route>
            <Route path="/" element={<Navigate to='/' />}  ></Route>
            <Route path="/create-product" element={<CreateProductPage />} ></Route>
            <Route path="/detail-product" element={<DetailProductPage />} ></Route>
            <Route path="/list-product" element={<ListProductsPage />} ></Route>
          </Routes>
          <FooterComponent />
          </UploadFileProvider>
        </CartProvider>
      </ProductProvider>
    </>
  )
}
