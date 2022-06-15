import styled from "styled-components";
import { dark_yellow, light_yellow } from "../../constants/colors";

export const Titulo = styled.div`
    display: flex;
    justify-content: center;

    h1 {
        text-transform: capitalize;
    }
`

export const ContainerDatails = styled.div`
    height: 80vh;
    display: flex;
    justify-content: space-evenly;
    color: ${light_yellow};
`

export const Collumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export  const ContainerImage = styled.div`
    
    border: 2px solid ${dark_yellow};
    display: flex;
    flex-direction: column;
    text-align: center;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8G-ICZ0zgFRyoHSwphLyVEf_tdF4CPHLAg&usqp=CAU');
    img {
        width: 190px;
    }
`

export const ContainerStats = styled.div`
    font-size: 20px;
   p{
      padding: 10px; 
   }
   h2{
       color: black;
   }
   
`

export const ContainerTypes = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
   p{
      padding: 10px; 
   }
   h2{
       color: black;
   }
   
`

export const ContainerMoves = styled.div`
  font-size: 20px;
   p{
      padding: 10px; 
   }
   h2{
       color: black;
   }
   
`