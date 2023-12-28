import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from "../assets/no-image.jpg";
import style from "../styles/styles.module.css";

export interface Props {
  img?: string;
  className?: string;
  styles?: CSSProperties
}

export const ProductImage = ({ img = "", className,styles }: Props) => {
  const { product } = useContext(ProductContext);

  let imgToShow = img ? img : product.img ? product.img : noImage;

  return (
    <img
      className={`${style.productImg} ${className}`}
      style={styles}
      src={imgToShow}
      alt="Coffee Mug"
    />
  );
};

export default ProductImage;
