import {styled} from "styled-components"
import background from "../../assets/banner-background.jpg"

const StyledBanner = styled.div`
    border-radius: 20px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: 75%;
    background-size: cover;
    height: 328px;
    width: 100%;
    padding: 72px 92px;
    box-sizing: border-box;
    h3{
        color: white;
        font-size: 40px;
        max-width: 300px;
        margin: 0;
    }
`

const Banner = () => {
    return (
        <StyledBanner>
            <h3>The most pixelated gallery you could find!</h3>
        </StyledBanner>
    )
}

export default Banner