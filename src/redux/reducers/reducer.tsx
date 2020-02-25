import {FETCH_DRINK, FETCH_DRINK_FAILURE, FETCH_DRINK_SUCCESS} from '../actions/actionTypes';
import {StateTypes} from '../../types/types';

export const initialState: StateTypes = {
  drinks: [],
  loading: false,
  error:"",  
};

const rootReducer = (state: StateTypes = initialState, action: any) => { 
  switch (action.type) {
      case FETCH_DRINK:
          return {
              ...state, loading: true
          }
      case FETCH_DRINK_SUCCESS:
          return {
              ...state, loading: false, drinks: action.payload, error: ""
          }
      case FETCH_DRINK_FAILURE:
          return {
              ...state, error: action.payload, loading:false
          }
      default:
          return { ...state };
  }
}

export default rootReducer;