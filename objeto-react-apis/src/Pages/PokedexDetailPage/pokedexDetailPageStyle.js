import styled from "styled-components"

export const PokedexDetailHeader = styled.div`

       

    .header{
        display: flex;
        justify-content: space-between;
    }
`
export const PokedexDetailCard = styled.div`

display: flex;
        justify-content: space-between;  

.imagem1{
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        margin-left: 5px;
        width: 31vh;
        padding-bottom: 90px;
        padding-top: 90px;
        text-align: center;    
        
    }
    .imagem2{
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        margin-left: 5px;
        
        padding-bottom: 90px;
        padding-top: 90px;
        align-items: center; 
      
    }
    .stats{
        margin-top: 15px;
        margin-bottom: 15px;
        border: 1px solid black;
        margin-left: 5px;
        width: 31vh;
        padding-left: 5px;
        padding-top: 45px;
        
        h3{
            text-align: center;
        }

    }
    .typeMoves{
        display: flex;
        flex-direction: column;
        width: 31vh;
        margin-top: 15px;
    }
    .type{
        border: 1px solid black;
        display: flex;
        justify-content: space-around;
        margin-bottom: 5px;
        margin-left: 5px;
    }
    .moves{
        border: 1px solid black;
        
        margin-left: 5px;
        padding-left: 5px;
        h3{
            text-align: center;
        }

    }
    

    

`

