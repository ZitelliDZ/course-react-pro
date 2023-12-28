import React, { useState } from "react";
import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

import noImage from "../assets/no-image.jpg";
import "../styles/custom-styles.css";
import { Product, onChangeArgs } from "../interfaces/Interfaces";
import { useShoppingCart } from "../hooks/useShoppingCart";



const ShoppingPage = () => {

  


  const {onProductCountChange, shoppingCart, products} = useShoppingCart()

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => {
          return (
            <ProductCard key={product.id} product={product} className={`bg-dark text-white`} onChange={(evento)=>onProductCountChange(evento)}  value={shoppingCart[product.id]?.count || 0 } >
              <ProductCard.Image className="custom-image"
            styles={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
              <ProductCard.Title title={product.title} />
              <ProductCard.Buttons className="custom-button" />
            </ProductCard>
          );
        })}


        <div className="shopping-cart" >
          
        {
          Object.entries(shoppingCart).map(([key,product])=>{
            return (
          <ProductCard key={key} product={product} className={`bg-dark text-white`} styles={{width:'100px'}} value={product.count} onChange={(evento)=>onProductCountChange(evento)}>
              <ProductCard.Image className="custom-image"
                styles={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
              <ProductCard.Buttons className="custom-button" />
          </ProductCard>
            )
          })
        }
        </div>
        <div>
          <code>
            {JSON.stringify(shoppingCart,null,5)}
          </code>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
