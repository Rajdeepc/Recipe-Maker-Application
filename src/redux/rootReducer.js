import { combineReducers } from 'redux';
import CompareReducer from '../components/compare/compare.reducer';
import SearchRecipeReducer from '../components/recipe/recipe.reducer';

export default combineReducers({
    CompareReducer,
    SearchRecipeReducer
});