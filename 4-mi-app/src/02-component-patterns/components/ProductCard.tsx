import style from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/Interfaces';


export const ProductContext = createContext( {} as ProductContextProps)
export const { Provider } = ProductContext





export const ProductCard = ({product,children}:ProductCardProps) => {

    const {counter,increaseBy} = useProduct()


  return (
    <Provider 
        value={{
            counter,
            increaseBy,
            product
        }} 
    >
        <div className={style.productCard }>
            {children}
        </div>
    </Provider>
  )
}

export default ProductCard




{/**
        * 
        <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductsButtons counter={counter} increaseBy={increaseBy} />
        * 
        */}