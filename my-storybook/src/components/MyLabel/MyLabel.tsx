import React from 'react';
import "./mylabel.css";

export interface PropsMyLabel {
  /**
   * Mensaje a mostrar en la etiqueta
   */
  label: string;

  /**
   * Tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Si se quiere que el texto se muestre en mayúsculas
   */
  allCaps?: boolean;
  /**
   * Color de la etiqueta
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Color de la fuente
   */
  fontColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({label = 'No Label', size = 'normal',fontColor='#000',color = 'primary',allCaps = false}: PropsMyLabel) => {
  return (
    <span 
      className={`${size} text-${color}`} style={{color: fontColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
