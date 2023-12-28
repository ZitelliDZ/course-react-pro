import React from 'react'
import ProductCard from '../components'

import noImage from '../assets/no-image.jpg'

const product = {
    id:'1',
    title:'Coffee Mug - Card',
    img: './coffee-mug.png'

}

const ShoppingPage = () => {

  

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
      }}>
      
      <ProductCard product={product}>
        
        <ProductCard.Image  />
        <ProductCard.Title title={''} />
        <ProductCard.Buttons  />
      
        
      </ProductCard>

      
      <ProductCard product={{
         title:'example',
         id:'2',
         img: './coffee-mug.png'
      }}>
        
        <ProductCard.Image img={noImage}  />
        <ProductCard.Title title={''} />
        <ProductCard.Buttons />
        <h1>asd</h1>
      </ProductCard>
      </div>

    </div>
  )
}

export default ShoppingPage
