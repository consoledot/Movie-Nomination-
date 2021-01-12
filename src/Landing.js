import {Link} from 'react-router-dom'
import {Container,Button} from './styles'
export default function Landing(){
    return(
        <Container green="#004c3f">
        <h2>Welcome to</h2>
        <h1>The Shoppies: Movie awards for entrepreneurs</h1>
        <p>Another award season is here, nominate your top 5 movies of 2020</p>
        <Link to="/nominate"><Button>Nominate</Button></Link>
        </Container>
    )
}