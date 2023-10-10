import DefaultTitle from "../../default-title"
import styled from "styled-components"
import tags from './tags.json'

const StyledContainer = styled.div`
    border-radius: 15px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    padding: 24px 0;
    align-items: center;
    button{
        border-radius: 10px;
        background: rgba(217, 217, 217, 0.30);
        color: white;
        font-size: 18px;
        transition: border-color 0.5s ease;
        padding: 12px;
        box-sizing: border-box;
        border: 2.3px solid transparent;
        &:hover {
        border-color: #C98CF1;
        cursor:pointer;
        font-weight: 400;
        }
    }
    h4{
        margin: 0;
        flex-basis: 100%;
        text-align: left;
    }
`

const Tags = ({setTag})=>{
    return (
        <StyledContainer>
          <DefaultTitle>Search by tags:</DefaultTitle>
          {tags.map(tag => <button key={tag.id} onClick={() => setTag(tag.tag)}>
            {tag.titulo}
            </button>)}
        </StyledContainer>
    )
}

export default Tags