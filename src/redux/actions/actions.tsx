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

export const fetchDrinkFailure: any = (payload: string) => {
    return{
        type: FETCH_DRINK_FAILURE,
        payload
    }    
}


export const fetching = (valor:string) => {
    return async (dispatch:any) => {
        dispatch(fetchDrink());
        try{        
            let response =  await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${valor}`);
                if( !!response.data.drinks){
                // console.log(response.data.drinks[0].idDrink)
                    dispatch(fetchDrinkSucces(response.data.drinks))
                    console.log("anda")
                }
                else {
                    console.log(response.status)
                    console.log(response.statusText)
                    dispatch(fetchDrinkFailure(response.status))
                }
        }catch(error){
            console.log(error)          
                console.log("no anda")      
                dispatch(fetchDrinkFailure(error))
        }      
}}