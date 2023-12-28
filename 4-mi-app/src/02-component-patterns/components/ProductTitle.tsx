import React, { useContext } from 'react'
import style from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'

export const ProductTitle = ({title}: {title: string}) => {
    const {product} = useContext(ProductContext)

    return (
        <span className={style.productDescription}>{title ? title : product.title}</span>
    )
}

export default ProductTitle

