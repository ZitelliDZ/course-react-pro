import style from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import React, { CSSProperties, ReactElement, createContext } from 'react';
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/Interfaces';
import { products } from '../data/products';


export const ProductContext = createContext( {} as ProductContextProps)
export const { Provider } = ProductContext


export interface Props {
    product: Product;
    children: (porps:ProductCardHandlers)=> JSX.Element,
    //children?:  ReactElement | ReactElement[];
    className?: string
    styles?: CSSProperties,
    onChange?: (args:onChangeArgs) => void
    value?:number
    initialValues: InitialValues
}


export const ProductCard = ({product,children,className,styles,onChange,value, initialValues}:Props) => {

    const {counter,increaseBy, maxCount, isMaxCountReached, reset} = useProduct({onChange,product,value,initialValues})



  return (
    <Provider 
        value={{
            counter,
            increaseBy,
            product,
            maxCount
        }} 
    >
        <div className={`${style.productCard} ${className} `} style={styles} >
            { children({
                count: counter,
                isMaxCountReached,
                maxCount: initialValues?.maxCount,
                product,

                increaseBy,
                reset
            }) 
            
            }
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