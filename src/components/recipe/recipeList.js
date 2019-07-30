import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { getRecipeList } from './recipe.action';


const RecipeList = (props) => {

    useEffect(() => {
        props.getRecipeList('chicken')
    }, []);



    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    searchRecipeReducerSate: state.SearchRecipeReducer
})


const RecipeListContainer = connect(mapStateToProps, {
    getRecipeList
})(RecipeList)


export default RecipeListContainer;




