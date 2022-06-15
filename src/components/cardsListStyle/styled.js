import styled from "styled-components";

export const ContainerList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 300px);
    column-gap: 30px;
    row-gap: 50px;
    justify-content: space-around;
    align-items: center;
    padding: 30px 0;
`;