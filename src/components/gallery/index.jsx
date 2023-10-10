import styled from "styled-components"
import HomeGallery from './home-gallery'
import Popular from './popular-galery'
import Tags from "./tags"


const StyledGallery = styled.div`
    width: 100%;
    text-align: center;
    h4{
        color: white;
        font-size: 24px;
        margin: 24px auto;
    }
`
const StyledContainer = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    gap: 24px;
`

const Gallery = ({ pictures = [], popPictures = [], selectingPic, onFavToggle, setTag }) => {
    return (
        <StyledGallery>
            <Tags setTag={setTag}/>
            <h4>Our galleries</h4>
            <StyledContainer>
                <HomeGallery content={pictures} selectingPic={selectingPic} onFavToggle={onFavToggle}/>
                <Popular content={popPictures}/>
            </StyledContainer>
        </StyledGallery>
    )
}

export default Gallery