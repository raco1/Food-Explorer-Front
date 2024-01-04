import { useAuth } from "../../hooks/auth";
import { useDish } from "../../hooks/dish";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button";
import { Ingredient } from "../../components/Ingredient";
import { ButtonWithText } from "../../components/ButtonWithText";

import { PiReceiptBold } from "react-icons/pi";
import imagePlaceholder from '../../assets/imagePlaceholder.png'


export function Dish(){
    const { user } = useAuth()

    const [data, setData] = useState(null)
    const [amount, setAmount] = useState(1)

    const imageURL = data && data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder

    const navigate = useNavigate()
    const params = useParams()

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


    function handleEdit(id){
        navigate(`/editdish/${id}`)
    }

    function handleBack(){
        navigate(-1)
    }
    useEffect(() => {
        async function fetchDishView(){
            const response = await api.get(`/dishes/${params.id}`)
            setData(response.data)
        }
        fetchDishView()
    }, [])

    return(
        <Container>
            <Header/>
                <div className="content-page">
                    {
                        data && 
                            <main>
                                <button onClick={handleBack}>
                                    {'<'} voltar
                                </button>

                                <img src={imageURL} alt="Imagem do prato" />

                                <section>
                                    <h2>{data.title}</h2>
                                    <p>{data.description}</p>
                                </section>

                                {
                                    data.ingredients &&
                                    <div className="ingredients">
                                        {data.ingredients.map(ingredient => <Ingredient key={ingredient.id} title={ingredient.name}/>)}             
                                    </div>
                                }

                                {
                                    user.isAdmin === 0 &&
                                    <div className="buttons">
                                        <Button title="-" onClick={decreaseCount}/>
                                        <p> {amount.toString().padStart(2, "0")} </p>
                                        <Button title="+" onClick={increaseCount}/>
                                        <ButtonWithText subtitle={`pedir ∙ R$ ${(data.price * amount).toFixed(2)}`} icon={PiReceiptBold}/>
                                    </div>
                                }
                                {
                                    user.isAdmin === 1 &&
                                    <div className="buttons">
                                        <ButtonWithText title="Editar prato" onClick={() => handleEdit(data.id)}/>
                                    </div>
                                }
                            </main>
                    }
                    <Footer/>
                </div>
        </Container>
    )
}