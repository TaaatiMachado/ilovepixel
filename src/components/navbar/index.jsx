import { styled } from "styled-components"
import Input from "../input"
import Logo from "../logo"

const StyledNavbar = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
`


const Navbar = ({setFilter}) => {
    return( <>
    <StyledNavbar>
      <Logo/>
      <Input setFilter={setFilter}/>
    </StyledNavbar>
    </>)
}

export default Navbar