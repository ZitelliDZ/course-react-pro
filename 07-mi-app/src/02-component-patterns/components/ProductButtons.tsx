import React, { CSSProperties, useCallback, useContext } from 'react'
import { ProductContext } from './ProductCard'
import style from '../styles/styles.module.css'


export interface Props {
    className?:string
    styles?: CSSProperties
}
export const ProductButtons = ({className,styles}:Props) => {
    
    const {counter,increaseBy,maxCount} = useContext(ProductContext)


    const isMaxReached = useCallback(

      () => !!maxCount && counter === maxCount,

      [counter, maxCount],
    )
    

    return (
        <div className={`${style.buttonsContainer} ${className}`} style={styles}>
            <button className={style.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
            <div className={style.countLabel}>{counter}</div>
            <button className={`${style.buttonAdd} ${ isMaxReached() && style.disabled}`} onClick={()=>increaseBy(+1)}>+</button>
        </div>
    )
}

export default ProductButtons



