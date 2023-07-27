import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
};

export const FilterContextProvider = ({ children }) =>{

    const { products } = useProductContext();   // products array from Product Context Before

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products }); //used useEffect Hook To load the products data into filter_procducts array when page reloads
    },[products]);

    return (
    <FilterContext.Provider value={{...state}} > 
        {children}
    </FilterContext.Provider>
    );
}

//custom Hook
export const useFilterContext = () => {
    return useContext(FilterContext);
};