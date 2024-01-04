import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { Container, Menu } from "./style";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { ButtonWithText } from "../ButtonWithText"
import { Footer } from "../../components/Footer"
import { Input } from "../Input";

import { RiCloseFill } from "react-icons/ri";
import { BsFillHexagonFill } from "react-icons/bs";
import { PiReceiptBold } from "react-icons/pi";
import { BiMenu, BiSearch} from "react-icons/bi";
import { MdLogout } from "react-icons/md";

export function Header({ search }){
    const { user, signOut } = useAuth()
    const [menu, setMenu] = useState(false)

    const navigate = useNavigate()

    function handleNewDish(){
        navigate("/newdish")
    }

    function handleHome(){
        navigate("/")
    }

    function handleSignOut(){
        navigate("/")
        signOut()
    }

    function openMenu(){
        setMenu(!menu)
    }

    function closeMenu(){
        setMenu(false)
    }

    return(
        <Container >
            {
            menu && 
            <Menu $active={setMenu}>
                <header>
                <nav>
                    <button type="submit" onClick={closeMenu}>
                        <RiCloseFill/>
                    </button>

                    <h1>Menu</h1>

                    <Input
                    type="text" 
                    placeholder="Busque por pratos ou ingredientes" 
                    icon={BiSearch}
                    onChange={(e) => {search(e.target.value)}}
                />
                </nav>
            </header>

            <main>
                
                {
                    user.isAdmin === 1 && 
                    <button onClick={handleNewDish}>
                        Novo prato
                    </button>
                }

                <button onClick={handleSignOut}>
                    Sair
                </button>
            </main>

            <Footer />
            </Menu>
            }
            <nav>
                <Button icon={BiMenu} onClick={openMenu} className="menu-logo"/>


                <div className="logo">
                    <Logo title="food explorer" icon={BsFillHexagonFill} $isheader onClick={handleHome}/>
                    {
                        user.isAdmin === 1 &&
                        <span>admin</span>
                    }
                </div>

                <Input
                    type="text" 
                    placeholder="Busque por pratos ou ingredientes" 
                    icon={BiSearch}
                    onChange={(e) => {search(e.target.value)}}
                    className="search-input"
                />

                {
                    user.isAdmin === 1 &&
                    <ButtonWithText title="Novo Prato" className="NovoPrato-Pedidos" onClick={handleNewDish}/>
                }

                {
                    user.isAdmin === 0 &&
                    <Button icon={PiReceiptBold} onClick={handleHome} className="pedidos-icon"/>
                }
                {
                    user.isAdmin === 0 &&
                    <ButtonWithText title="Pedidos" icon={PiReceiptBold} onClick={handleHome} className="NovoPrato-Pedidos" />
                }

                <Button icon={MdLogout} onClick={handleSignOut} className="logout"/>
          </nav>
        </Container>
    )
}