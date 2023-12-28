import style from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import React, { CSSProperties, ReactElement, createContext } from 'react';
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/Interfaces';


export const ProductContext = createContext( {} as ProductContextProps)
export const { Provider } = ProductContext


export interface Props {
    product: Product;
    //children?: ()=> JSX.Element
    children?:  ReactElement | ReactElement[];
    className?: string
    styles?: CSSProperties,
    onChange?: (args:onChangeArgs) => void
    value?:number
}


export const ProductCard = ({product,children,className,styles,onChange,value}:Props) => {

    const {counter,increaseBy} = useProduct({onChange,product,value})



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