import { useState } from "react"
import { useDish } from "../../hooks/dish"
import { useNavigate } from "react-router"

import { Container } from "./styles"
import { Input } from "../../components/Input"
import { Header } from '../../components/Header'
import { Footer } from "../../components/Footer"
import { IngredientItem } from "../../components/IngredientItem"
import { Textarea } from "../../components/Textarea"
import { ButtonWithText } from "../../components/ButtonWithText"

import { MdOutlineDriveFolderUpload } from "react-icons/md"


export function CreateDish(){
    const { createDish } = useDish()

    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState("")

    function handleAddIngredients(){
        setIngredients(prevState => [...prevState, newIngredients])
        setNewIngredients("")
    }

    function handleRemoveIngredients(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState([])

    async function handleNewDish() {
        if (!image) {
            return alert("Você não inseriu uma imagem para o prato!")
        } else if (!title) {
            return alert("Você não informou o nome do prato!")
        } else if (ingredients.length < 1) {
            return alert("Adicione pelo menos um ingrediente!")
        } else if (newIngredients) {
            return alert("Você deixou um ingrediente no campo para adicionar. Por favor, finalize a adição para continuar!");
        } else if (!category) {
            return alert("Você não selecionou a categoria do prato!")
        } else if (!price) {
            return alert("Você não informou o preço do prato!")
        } else if (!description) {
            return alert("Você não informou uma descrição para o prato!")
        }
        createDish({ title, description, category, price, image, ingredients })
        alert(`${title} criado com sucesso!`)
        handleBack()
    }

    return(
        <Container>
            <Header/>
            <main>
                <button type="button" onClick={handleBack}>
                    {'<'} voltar
                </button>
                <form>
                    <h2>Novo Prato</h2>
                    <label htmlFor="file">
                        Imagem do prato
                        <span>Selecione uma imagem</span>
                        <Input 
                            type="file" 
                            placeholder="Selecione uma imagem" 
                            icon={MdOutlineDriveFolderUpload} 
                            id="file"
                            accept="image/*" 
                            onChange={e => setImage(e.target.files[0])}
                        />
                    </label>

                    <label htmlFor="name">
                        Nome
                        <Input 
                            type="text" 
                            placeholder="Ex.: Salada Ceasar"
                            onChange={e => setTitle(e.target.value)}
                            />
                    </label>

                    <label htmlFor="category">
                        <select name="category "id="category" defaultValue={'default'} onChange={e => setCategory(e.target.value)}>
                            <option value="default" disabled>Selecione uma Categoria</option>
                            <option value="dishes">Refeições</option>
                            <option value="drink">Bebidas</option>
                            <option value="dessert">Sobremesas</option>
                        </select>
                    </label>

                    <h3>Ingredientes</h3>

                    <section>
                        {
                            ingredients.map((ingredient, index) => (
                                <IngredientItem 
                                    key={String(index)}
                                    value={ingredient}
                                    onClick={() => handleRemoveIngredients(ingredient)}
                                />
                            ))
                        }
                        
                        <IngredientItem 
                            $isnew
                            onChange={e => setNewIngredients(e.target.value)}
                            value={newIngredients}
                            onClick={handleAddIngredients}
                        />
                    </section>

                    <label htmlFor="price">
                        Preço
                        <Input id="price" type="text" placeholder="R$ 00,00" onChange={e => setPrice(e.target.value)}/>
                    </label>

                    <label htmlFor="description">
                        Descrição
                        <Textarea 
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setDescription(e.target.value)}
                        />
                    </label>

                    <ButtonWithText title="Salvar alterações" onClick={handleNewDish}/>
                </form>
                <Footer/>
            </main>
        </Container>
    )
}