import styled from "styled-components"

const Card = styled.div`
    color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)); 
    max-width: 250px;
    margin: 0;
    padding: 0;
    display: flex;
    img{
      object-fit: cover;
      width: ${props => props.$expandida ? '90%' : '460px'};
      max-width: 100%;
      max-height: 100%;
      min-height: 160px;
      border-radius: 20px;
      margin: 0;
      box-sizing: border-box;
      &:hover{
        cursor: pointer;
      }
    }
`

const Img = ({ title, path }) => {
    return (
        <Card>
            <img src={path} alt={title}></img>
        </Card>
    )

}

export default Img