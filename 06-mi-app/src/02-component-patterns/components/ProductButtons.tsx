import React, { CSSProperties, useContext } from 'react'
import { ProductContext } from './ProductCard'
import style from '../styles/styles.module.css'


export interface Props {
    className?:string
    styles?: CSSProperties
}
export const ProductButtons = ({className,styles}:Props) => {
    
    const {counter,increaseBy,} = useContext(ProductContext)

    return (
        <div className={`${style.buttonsContainer} ${className}`} style={styles}>
            <button className={style.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
            <div className={style.countLabel}>{counter}</div>
            <button className={style.buttonAdd} onClick={()=>increaseBy(+1)}>+</button>
        </div>
    )
}

export default ProductButtons



