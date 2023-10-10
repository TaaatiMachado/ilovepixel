import DefaultTitle from "../../default-title"
import ImgCard from "../img-card"
import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 24px;
`
const FluidSec = styled.section`
    display: inline-block;
    h4{
        text-align: left;
    }
`

const HomeGallery = ({ content, selectingPic, onFavToggle }) => {
    return (
        <FluidSec>
            <DefaultTitle> Spotlight </DefaultTitle>
            <StyledContainer>
                <>{content.map(pic => <ImgCard pic={pic} onZoom={selectingPic} key={pic.id} onFavToggle={onFavToggle}/>)}</>
            </StyledContainer>
        </FluidSec>
    )
}

export default HomeGallery