import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Container, Image } from "./styles";
import { Header } from '../../components/Header'
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { IngredientItem } from "../../components/IngredientItem";
import { Textarea } from "../../components/Textarea";

import imagePlaceholder from "../../assets/imagePlaceholder.png"
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { ButtonWithText } from "../../components/ButtonWithText";






export function EditDish(){
    const [data, setData] = useState()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")

    const imageURL = data && data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder
    
    const [image, setImage] = useState(imageURL)
    const [imageFile, setImageFile] = useState(null)

    const params = useParams()

    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState("")

    function handleAddIngredients(){
        setIngredients(prevState => [...prevState, newIngredients])
        setNewIngredients("")
    }

    function handleRemoveIngredients(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    function handleImageUpdate(event){
        const file = event.target.files[0]
        setImageFile(file)

        const imgPreview = URL.createObjectURL(file)
        setImage(imgPreview)
    }
    async function handleSaveProfile(){
        let titleUpdated = title ? title : data.title
        let descriptionUpdated = description ? description : data.description
        let priceUpdated = price ? price : data.price
        let categoryUpdated = category ? category : data.category
        let ingredientsUpdated = ingredients ? ingredients : data.ingredients

        try{
            if(imageFile){
                const imageUpload = new FormData()
                imageUpload.append("image", imageFile)
                await api.patch(`/dishes/image/${params.id}`, imageUpload)
            }
            await api.put(`/dishes/${params.id}`, { title: titleUpdated, description: descriptionUpdated, category: categoryUpdated, price: priceUpdated, ingredients: ingredientsUpdated })
            alert("Prato atualizado com sucesso!")
            handleBack()
        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            }
        }
    }

    async function handleDeleteDish(){
        const confirm = window.confirm("Tem certeza que deseja excluir este prato?")

        if(confirm){
            api.delete(`/dishes/${params.id}`)
            navigate("/")
        }
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
            <main>
                <button type="button" onClick={handleBack}>
                {'<'} voltar
                </button>

                {
                    data &&
                        <form>
                            <h2>Editar Prato</h2>
                            <Image>
                            
                            <img src={image} alt="Foto do prato." />
                            <label htmlFor="image">    
                                <MdOutlineDriveFolderUpload/>
                            <input type="file" id="image" onChange={handleImageUpdate}/>
                            </label>
                            <p>Selecione uma imagem</p>
                            
                            </Image>

                            <label htmlFor="name">
                                Nome
                                <Input 
                                    type="text" 
                                    id="name" 
                                    placeholder={data.title} 
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
                                    ingredients.map((ingredient, index) => 
                                    <IngredientItem 
                                        key={String(index)}
                                        value={ingredient}
                                        onClick={() => handleRemoveIngredients(ingredient)}
                                    />)
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
                                <Input 
                                    id="price" 
                                    type="number" 
                                    placeholder={`R$ ${data.price}`} 
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </label>

                            <label htmlFor="description">
                                Descrição
                                <Textarea 
                                    placeholder={data.description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </label>

                            <div className="buttons">
                                <ButtonWithText title="Excluir prato" onClick={handleDeleteDish}/>
                                <ButtonWithText title="Salvar alterações" onClick={handleSaveProfile}/>
                            </div>
                    </form>

                }
                <Footer/>
            </main>
        </Container>
    )
}