import Container from "react-bootstrap/Container0";
import { ItemCount } from "./ItemCount";
export const ItemListContainer = (props )=> {
    return (
        <Container className="mt-4">
            <h1>{props.greeting}</h1>
            <ItemCount/> 
        </Container>
    )
};