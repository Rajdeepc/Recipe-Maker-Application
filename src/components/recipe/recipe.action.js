import axios from 'axios';
import { paramSerializer } from '../../constants/commonServices';
import APP_CONSTANTS from '../../constants/labelConstants';
import {GET_RECIPE_LIST,NO_DATA_FOUND} from './recipe.types';

const getRecipeList = (searchQuery) => dispatch => {
    const baseEndPoint = 'https://api.edamam.com/search';
    const paramObj = {
        q : searchQuery,
        app_id: APP_CONSTANTS.APP_ID,
        app_key: APP_CONSTANTS.APP_KEY
    }
    const buildUrl = paramSerializer(baseEndPoint,paramObj)

    axios.post(buildUrl)
    .then(res => {
        if(res.length) {
            dispatch({
                type: GET_RECIPE_LIST,
                payload: res.hits
            })
        } else {
            dispatch({
                type: NO_DATA_FOUND,
                payload: res.errors
            })
        }
    }).catch(err => {
        throw new err
    })
}



export { getRecipeList }