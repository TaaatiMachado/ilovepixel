import styled from "styled-components"
import Logo from '../logo'

const StyledFooter = styled.footer`
    padding: 15px;
    position: relative;
    z-index: 1;
    bottom: 0;
    margin-top: 35px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #260047  ;
    p{
        font-size: 20px;
        color: white;
        margin: 15px 0 0;
    }
    h1{
        font-size: 25px;
        img{
            width: 30px;
        }
    }
`

const PageFooter = () => {
    return (
        <StyledFooter>
            <Logo/>
            <>
             <p> &copy;2023</p>
            </>
        </StyledFooter>
    )
}

export default PageFooter