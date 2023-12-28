
import { ProductCardComponentProps } from "../interfaces/Interfaces";
import ProductButtons from "./ProductButtons";
import  { ProductCard as ProductCardComponent } from "./ProductCard";
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";



export const ProductCard:ProductCardComponentProps = Object.assign( ProductCardComponent , {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})
export default ProductCard