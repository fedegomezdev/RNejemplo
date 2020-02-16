import {FETCH_DRINK, FETCH_DRINK_FAILURE, FETCH_DRINK_SUCCESS} from './actionTypes';
import Axios from 'axios';
import {Drinks} from '../../types/types';


export const fetchDrink: any = () => {
    return {
        type: FETCH_DRINK
    }
}

export const fetchDrinkSucces: any = (payload : Drinks[]) => {
    return{
        type: FETCH_DRINK_SUCCESS,
        payload
    }
}

export const fetchDrinkFailure: any = (payload: any) => {
    return{
        type: FETCH_DRINK_FAILURE,
        payload
    }    
}


export const fetching = (valor:string) => {
    return  (dispatch:any) => {
        dispatch(fetchDrink());
        Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${valor}`)
            .then(response => {
                console.log(response.data.drinks[0].idDrink)
                dispatch(fetchDrinkSucces(response.data.drinks))
                dispatch(fetchDrinkFailure(false))
            })
            .catch(error => {
                console.log(error)                
                dispatch(fetchDrinkFailure(true))
            })
    }
}