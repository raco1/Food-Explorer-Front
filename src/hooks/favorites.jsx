import { createContext, useState, useContext, useEffect } from "react";

export const FavoritesContext = createContext({})

function FavoritesProvider({ children }){
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("@fexplorer: favorites")) || [])

    function addFav(data){
        setFavorites([...favorites, data])
    }
    function removeFav(data){
        setFavorites(favorites.filter(dish => dish.id !== dish.id))
    }
    useEffect(() => {
        localStorage.setItem("@fexplorer: favorites", JSON.stringify(favorites))
    }, [favorites])
    return(
        <FavoritesContext.Provider value={{ favorites, addFav, removeFav }}>
            { children }
        </FavoritesContext.Provider>
    )
}

function useFavorites(){
    const context = useContext(FavoritesContext)
    return context
}

export { FavoritesProvider, useFavorites }