import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { getRecipeList } from './recipe.action';
import RecipeItem from './recipeItem';
import { Row,Col } from 'react-bootstrap';

const RecipeList = (props) => {

    useEffect(() => {
        props.getRecipeList('chicken')
    }, []);



    return (
        <Row>
            { props.searchRecipeReducerSate.recipeDataArray.map((item) => {
                return (
                    <Col sm={3}>
                    <RecipeItem item={item.recipe} { ...props} /> 
                    </Col>
                )
            })}
        </Row>
    )
}

const mapStateToProps = (state) => ({
    searchRecipeReducerSate: state.SearchRecipeReducer
})


const RecipeListContainer = connect(mapStateToProps, {
    getRecipeList
})(RecipeList)


export default RecipeListContainer;




