import React from "react";
import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

import noImage from "../assets/no-image.jpg";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  img: "./coffee-mug.png",
  title: "Coffee Mug - Card",
};

const ShoppingPage = () => {
  return (
    <div >
      <h1>Shopping Page</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductImage className="custom-image" />
          <ProductTitle title={""} />
          <ProductButtons />
        </ProductCard>

        <ProductCard
          product={{
            title: "example",
            id: "2",
            img: "./coffee-mug.png",
          }}
          className={`bg-dark text-white`}
        >
          <ProductCard.Image img={noImage} className="custom-image" />
          <ProductCard.Title title={""} className="" />
          <ProductCard.Buttons className="custom-button" />
        </ProductCard>

        <ProductCard
          product={product}
          className={`bg-dark text-white`}
          styles={{backgroundColor: "#70D1F8"}}
        >
          <ProductCard.Image img={noImage} className="custom-image" styles={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}} />
          <ProductCard.Title title={""} className="" styles={{fontWeight:'bold'}} />
          <ProductCard.Buttons className="custom-button" styles={{display:'flex', justifyContent:'end'}} />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
