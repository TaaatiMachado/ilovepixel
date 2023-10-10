import styled from "styled-components"

const StyledLogo = styled.h1`
  display: flex;
  color: white;
  align-items: center;
  margin: 0;
  font-family: 'Press Start 2P', cursive;
  img{
    width: 50px;
    margin: 0 7px;
  }
  border: dashed 3px white;
  padding: 5px 10px;
`

const Logo = () => {
    return (
        <StyledLogo>I
            <img src="logo.png" alt="I Love Pixel Logo" />
            PXL
        </StyledLogo>
    )

}

export default Logo