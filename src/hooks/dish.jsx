/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import { api } from "../services/api"

export const DishContext = createContext({})

function DishProvider({ children }){

    async function createDish({ title, description, category, price, ingredients, image }){    
        try{
            const formData = new FormData()
            formData.append("image", image)
            formData.append("title", title)
            formData.append("description", description)
            formData.append("category", category)
            formData.append("price", price)

            ingredients.map(ingredient => (
                formData.append("ingredients", ingredient)
            ))

            await api.post('/dishes', formData)

        } catch(error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível criar o prato.")
            }
        }
    }
   
    return(
        <DishContext.Provider value={{ createDish }}>
            { children }
        </DishContext.Provider>
    )
}
function useDish(){
    const context = useContext(DishContext)

    return context
}

export { DishProvider, useDish }