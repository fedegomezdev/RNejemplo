export type Drinks = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}


export type StateTypes = {
    loading: boolean;
    error: string;
    drinks: Drinks[];
};