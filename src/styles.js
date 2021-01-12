import styled from 'styled-components'

export const Container = styled.div`
    background-color:${props => props.green || "white"};
    margin:0;
    padding:0;
    height:100vh;
`
export const Button = styled.button`
    background-color: white;
    color: #004c3f;
    padding:0.5rem 1rem;
    cursor: pointer;
    border:1px solid white;
    border-radius: 4px;
    &:{
        background-color:#004c3f;
        color:white;
        border:1px solid white;
    }
`