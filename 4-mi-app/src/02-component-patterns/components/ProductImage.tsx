import React, { useContext } from 'react'
import { ProductContext } from './ProductCard'
import noImage from '../assets/no-image.jpg'
import style from '../styles/styles.module.css'

export const ProductImage = ({img = ''}) => {
    
    const {product} = useContext(ProductContext)

    let imgToShow = img ? img: (product.img ? product.img :noImage)

    return (
        <img className={style.productImg} src={imgToShow} alt="Coffee Mug" /> 
    )
}

export default ProductImage


