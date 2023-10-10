import DefaultTitle from '../../default-title'
import Img from '../img-card/img'
import styled from 'styled-components'
import Button from '../../button'

const StyledContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 24px;
`
const FluidSec = styled.section`
    display: inline-block;
    max-width: 240px;

    h4{
        text-align: left;
    }
`
const Popular = ({ content }) => {
    return (
    <FluidSec>
        <DefaultTitle>Popular</DefaultTitle>
        <StyledContainer>
            {content.map(pic => <Img title={pic.title} path={pic.path} source={pic.source} key={pic.id}/>)}
        </StyledContainer>
        <Button>See more</Button>
    </FluidSec>
    )
}

export default Popular