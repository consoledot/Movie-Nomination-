import {useState} from 'react'
import {Container,Button} from './styles'
export default function Nominate(){
    const [text,setText] = useState("")
    const [movies, setMovies] = useState([])
    const apiKey = process.env.REACT_APP_API_KEY 
    const getText = (e)=>{
        const {value} = e.target
        setText(value)
    }
    const saerchMovie = ()=>{
        fetch( `http://www.omdbapi.com/?s=${text}&plot=full&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => console.log(data.Search))
            .catch(err => console.lof(err))
    }
    return(
        <Container>
        <input placeholder="Search for any movie" onChange={(e)=>getText(e)}/>
        <button onClick={()=>saerchMovie()}>Search</button>
        <h1>Nominate</h1>
        </Container>
    )
} 