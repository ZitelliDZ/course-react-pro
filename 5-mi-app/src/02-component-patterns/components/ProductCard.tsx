import style from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import React, { CSSProperties, ReactElement, createContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/Interfaces';


export const ProductContext = createContext( {} as ProductContextProps)
export const { Provider } = ProductContext


export interface Props {
    product: Product;
    //children?: ()=> JSX.Element
    children?:  ReactElement | ReactElement[];
    className?: string
    styles?: CSSProperties
}


export const ProductCard = ({product,children,className,styles}:Props) => {

    const {counter,increaseBy} = useProduct()


  return (
    <Provider 
        value={{
            counter,
            increaseBy,
            product
        }} 
    >
        <div className={`${style.productCard} ${className} `} style={styles} >
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