import { useState } from "react"
import { useAuth } from "../../hooks/auth" 
import { useFavorites } from "../../hooks/favorites"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { Button } from "../Button"
import { Container } from "./styles"
import { ButtonWithText } from "../ButtonWithText"

import { PiHeartFill, PiHeartLight, PiPencilSimpleDuotone } from "react-icons/pi";
import imagePlaceholder from '../../assets/imagePlaceholder.png'

export function Card({ data, ...rest }){

  const { user } = useAuth()

  const { favorites, addFav, removeFav } = useFavorites()

  const isFav = favorites.some((dish) => dish.title === data.title)

  const [amount, setAmount] = useState(1)

  const navigate = useNavigate()

  const imageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder

  function increaseCount(){
    if(amount > 9){
      alert("O máximo de itens por pedido é de 10 unidades.")
      setAmount(9)
    }
    setAmount(count => count + 1)
  }
  function decreaseCount(){
    if(amount < 2){
      alert("O mínimo de item por pedido é de 1 unidade.")
      setAmount(2)
    }
    setAmount(count => count - 1)
  }

  function handleViewDish(id){
    navigate(`/dishes/${id}`)
  }

  function handleEdit(id){
      navigate(`/editdish/${id}`)
  }
  
  function handleOrder(){
    navigate(`/`)
}

    return(
        <Container { ...rest }>

                { 
                    user.isAdmin === 1 

                ?

                    <>
                        <button type="button" onClick={() => handleEdit(data.id)}>
                            <PiPencilSimpleDuotone/>
                        </button>
                    </>
                :
                    user.isAdmin === 0 &&
                    <>
                        <button type="button" onClick={() => isFav ? removeFav(data) : addFav(data) }>
                            {isFav ? <PiHeartFill/> : <PiHeartLight/>}
                        </button>
                    </>
                }

              <figure>
                <img src={imageURL} alt="Imagem do prato" />
              </figure>
              
             <button className="title" onClick={() => handleViewDish(data.id)}>
               <h3>{data.title} {'>'}</h3>
             </button>

              <span>R$ {(data.price * amount).toFixed(2)}</span>

              {
                user.isAdmin === 0 &&

                <div className="handle-amount-included">
                  <div className="buttons">
                    <Button title="-" onClick={decreaseCount}/>
                    <p> {amount.toString().padStart(2, "0")} </p>
                    <Button title="+" onClick={increaseCount}/>
                  </div>

                  <ButtonWithText title="incluir" onClick={handleOrder}/>
                </div>
              }
        </Container>
    )
}