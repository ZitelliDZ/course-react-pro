import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/Interfaces";

interface useProductProps {
    product: Product
    onChange?: (args: onChangeArgs) => void
    value?:number
    initialValues: InitialValues
}

export const useProduct = ({onChange,product,value=0,initialValues}:useProductProps) => {

  const [counter, setCounter] = useState(initialValues.count || value);
  const isMounted = useRef( false )


  const isController = useRef( !!onChange )

  const increaseBy = (value: number) => {

    
    let newValue = Math.max(counter + value, 0)
    if (initialValues?.maxCount) {
       newValue = Math.min(counter + value, initialValues.maxCount) 
    }

    if ( isController.current ) {
        return onChange!({
            count: value,
            product
        })
    }



    setCounter(newValue);

    onChange && onChange( {
        count: newValue,
        product
    } );
  };

  useEffect(() => {
    if ( !isMounted.current ) {return} else {setCounter(initialValues.count || value)}
    
  }, [value])

  
  useEffect(() => {
    isMounted.current = true;
    
  }, [])
  
  const reset = () => {
    setCounter(initialValues.count || value);
  }

  return {
    counter,
    value,
    maxCount:initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.maxCount && counter === initialValues?.maxCount,
    
    increaseBy,
    reset,
  };
};
