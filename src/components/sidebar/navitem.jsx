import { styled } from "styled-components"

const StyledNavItem = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    font-family: ${ props => props.$active ? 'SFPixelateBold' : 'SFPixelate'};
    color: ${ props => props.$active ? '#7B78E5' : '#D9D9D9'};
    display: flex;
    align-items: center;
    gap: 20px;
    a{
        text-decoration: none;
        color: inherit;
    }
    img{
        width: 45px;
    }
`

const NavItem = ({children, Icon, active=false}) => {
    return (
        <StyledNavItem $active={active}>
        <img src={Icon} alt="menu icon"/>
        {children}
        </StyledNavItem>
    )
}

export default NavItem