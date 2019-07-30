import {GET_RECIPE_LIST,NO_DATA_FOUND} from './recipe.types';

const INITIAL_STATE = {
    recipeDataArray: [],
    noRecipeFoundObjError: {},
    isRecipeHasResults: false
}

const SearchRecipeReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case GET_RECIPE_LIST:
            return {
                ...state,
                isRecipeHasResults: true,
                recipeDataArray: action.payload
            }
        case NO_DATA_FOUND:
            return {
                ...state,
                isRecipeHasResults: false,
                noRecipeFoundObjError: action.payload
            }
        default:
            return state
    }
}

export default SearchRecipeReducer;