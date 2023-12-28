import React from "react"




//export function useForm<T>(initialState:T) {
export const useForm = <T extends Object>(initialState:T) => {

    const [formulario, setFormulario] = React.useState<T>(initialState)

    const handleInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setFormulario({
          ...formulario,
            [target.name]: target.value
        })
    }
    return {
        formulario,
        handleInputChange
    }
}