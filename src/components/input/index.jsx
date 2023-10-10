import { styled } from "styled-components";
import glass from '../../assets/mglass.svg'

const StyledContainer = styled.div`
    position: relative;
    display: inline-block;
`

const StyledInput = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const GlassIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const Input = ({setFilter}) => {
    return (
        <StyledContainer>
        <StyledInput placeholder="Search here..." onChange={(event) => { setFilter(event.target.value) }}/>
        <GlassIcon src={glass} alt="Ícone da Lupa"/>
        </StyledContainer>
    )
}
export default Input