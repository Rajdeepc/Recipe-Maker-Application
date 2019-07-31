import React from 'react';
import { Card ,Button} from 'react-bootstrap';

const RecipeItem = (props) => {

    let item = props.item
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.label}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

// const mapStateToProps = (state) => ({
//     searchRecipeReducerSate: state.SearchRecipeReducer
// })


// const RecipeListContainer = connect(mapStateToProps, {
//     getRecipeList
// })(RecipeList)


export default RecipeItem;




