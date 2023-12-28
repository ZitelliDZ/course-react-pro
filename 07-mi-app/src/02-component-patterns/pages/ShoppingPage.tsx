import React from "react";
import ProductCard from "../components";
import "../styles/custom-styles.css";

import { products } from "../data/products";

const product = products[0];

const ShoppingPage = () => {
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
        <ProductCard
          key={product.id}
          product={product}
          className={`bg-dark text-white`}
          initialValues={{
            quantity: 1,
            size: "S",
            color: "red",
            count: 3,
            maxCount: 10,
          }}
        >
          {({
            product,
            increaseBy,
            isMaxCountReached,
            maxCount,
            reset,
          }) => (
            <>
              <ProductCard.Image
                className="custom-image"
                styles={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductCard.Title title={product.title} />
              <ProductCard.Buttons className="custom-button" />
              <button onClick={reset}>asd</button>
                <button onClick={()=>increaseBy(+2)}>+2</button>

              {isMaxCountReached && (
              <button onClick={()=>increaseBy(-2)}>-2</button>

              )}

            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
