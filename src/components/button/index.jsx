import styled from "styled-components";

const Button = styled.button`
    border-radius: 10px;
    border: 2px solid  #C98CF1;
    background-color: rgba(255, 255, 255, 0.3);;
    padding: 12px;
    color: white;
    transition: 0.5s ease;
    margin: 15px;

    &:hover{
        background-color: #451387;
        border: 2px solid #451387;
        cursor: pointer;
    }
`

export default Button