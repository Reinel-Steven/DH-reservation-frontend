import { DetailProductComponent } from '../../components/DetailProductComponent';
import { SaveProductComponent } from '../../components/SaveProductComponent';
import { ProductContext } from '../../context/productContext';
import '../../styles/CardComponent.css'
import { useContext, useEffect, useState } from "react"


export const DetailProductPage = ({ product }) => {

    const { selectProduct } = useContext(ProductContext)

    const [productDetail, setProductDetail] = useState({ product })

    const isProduct = () => { productDetail.id > 0 }

    return (
        <>
            {isProduct ?
                <DetailProductComponent
                    product={selectProduct}                    
                />
                :
                <SaveProductComponent
                    key={id}
                    id={id}
                    onChange={onNewValue}
                />
            }
        </>
    )
}
