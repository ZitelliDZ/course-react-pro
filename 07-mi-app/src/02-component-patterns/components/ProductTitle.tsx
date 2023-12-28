import React, { CSSProperties, useContext } from "react";

import { ProductContext } from "./ProductCard";
import style from "../styles/styles.module.css";

export interface Props {
  title: string;
  className?: string;
  styles?: CSSProperties
}

export const ProductTitle = ({ title, className,styles }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${style.productDescription} ${className}`} style={styles}>
      {title ? title : product.title}
    </span>
  );
};

export default ProductTitle;
