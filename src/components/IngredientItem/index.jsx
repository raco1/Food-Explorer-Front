import { Container } from "./styles";
import { FiPlus, FiX } from 'react-icons/fi'

export function IngredientItem({ $isnew, value, onClick, ...rest }){
    return(
        <Container $isnew={$isnew}>
                <input 
                type="text" 
                value={ value }
                readOnly={!$isnew}
                placeholder="Adicionar"
                { ...rest }
                />
                
                <button type="button" onClick={onClick}>
                    {$isnew ? <FiPlus/> : <FiX/>}
                </button>
        </Container>
    )
}