import { styled } from "styled-components";
import NavItem from "./navitem";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: 305px;
`

const Sidebar = () => {
    return (
        <aside width="212px">
            <nav>
                <StyledList>
                    <NavItem Icon='/icons/home-ativo.png'  active={true}>
                        <a href="">
                            Home
                        </a>
                    </NavItem>
                    <NavItem Icon='/icons/novas-ativo.png' >
                        <a href="">
                            New Releases
                        </a>
                    </NavItem>
                    <NavItem Icon='/icons/mais-vistas-ativo.png'>
                        <a href="">
                            Famous Pixels
                        </a>
                    </NavItem>
                    <NavItem Icon='/icons/mais-curtidas-ativo.png' >
                        <a href="">
                            Most Liked
                        </a>
                    </NavItem>
                    <NavItem Icon='/icons/surpreenda-me-ativo.png' >
                        <a href="">
                            Pixel of the Day
                        </a>
                    </NavItem>

                </StyledList>
            </nav>
        </aside>
    )
}

export default Sidebar;