const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
          return {
            ...state,
            filter_products: [...action.payload],// used spread operator so that orignal data won't be harmed
            all_products: [...action.payload],
          };
          
        case "SET_GRIDVIEW":
          return{
            ...state,
            grid_view: true,
          };
        
      
          
        default:
          return state;
    }
  };

  export default reducer;