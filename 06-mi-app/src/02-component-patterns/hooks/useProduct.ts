import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/Interfaces";

interface useProductProps {
    product: Product
    onChange?: (args: onChangeArgs) => void
    value?:number
}

export const useProduct = ({onChange,product,value=0}:useProductProps) => {

  const [counter, setCounter] = useState(value);

  const isController = useRef( !!onChange )

  const increaseBy = (value: number) => {

    if ( isController.current ) {
        return onChange!({
            count: value,
            product
        })
    }

    const newValue = Math.max(counter + value, 0)

    setCounter(newValue);

    onChange && onChange( {
        count: newValue,
        product
    } );
  };

  useEffect(() => {
    
    setCounter(value)
    
  }, [value])
  

  return {
    counter,
    increaseBy,
    value
  };
};
