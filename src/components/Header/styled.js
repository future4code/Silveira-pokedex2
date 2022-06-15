import styled from "styled-components";
import { dark_blue, dark_yellow, light_yellow } from "../../constants/colors";

export const HeaderContainer = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    position: relative;
    height: 10vh;

    // TÍTULO
    h1 {
        font-family: 'Koulen', cursive;
        font-size: 2.5rem;
        color: ${dark_blue};
    };

    // BOTÃO DE MUDAR PÁGINA
    button {
        position: absolute;
        left: 2%;
        border: none;
        background-color: ${dark_blue};
        padding: 10px;
        border-radius: 7px;
        color: ${light_yellow};

        &:hover {
            border: 1px solid ${dark_yellow};
        };
    };

    span {
        position: absolute;
        right: 2%;
        font-size: 0.84rem;
        border: 1px solid transparent;
        background-color: ${dark_blue};
        border-radius: 7px;
        padding: 10px;
        color: ${light_yellow};

        &:hover {
            border: 1px solid ${dark_yellow};
            cursor: default;
        };
    };
`;

export const Logo = styled.img`
    width: 200px;
    position: absolute;
    right: 2%;
`;