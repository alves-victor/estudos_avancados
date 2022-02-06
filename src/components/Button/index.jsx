import styled from "styled-components";

const ButtonStyle = styled.button`
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 900;
    height: 50px;
    width: 100px;
    margin: 0 auto;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 4px black;
    &:hover {
        border: 2px solid black;
        cursor: pointer;
    }
`;

const Button = (props) => {
    return(
        <ButtonStyle 
            style={props.style}
            onClick={props.onClick}
        >
            {props.children}
        </ButtonStyle>
    );
}

export default Button;