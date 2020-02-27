import {
  FETCH_DRINK,
  FETCH_DRINK_FAILURE,
  FETCH_DRINK_SUCCESS,
} from './actionTypes';
import Axios from 'axios';
import {Drinks} from '../../types/types';

export const fetchDrink: any = () => {
  return {
    type: FETCH_DRINK,
  };
};

export const fetchDrinkSucces: any = (payload: Drinks[]) => {
  return {
    type: FETCH_DRINK_SUCCESS,
    payload,
  };
};

export const fetchDrinkFailure: any = (payload: string) => {
  return {
    type: FETCH_DRINK_FAILURE,
    payload,
  };
};

export const fetching = (valor: string) => {
  return async (dispatch: any) => {
    dispatch(fetchDrink());
    try {
      let response = await Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${valor}`,
      );
      dispatch(fetchDrinkSucces(response.data.drinks));
    } catch (error) {
      console.log(error);
      dispatch(fetchDrinkFailure(error));
    }
  };
};
