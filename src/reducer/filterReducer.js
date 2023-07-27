const reducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [...action.payload],// used spread operator so that orignal data won't be harmed
          all_products: [...action.payload],
        };

      default:
        return state;
    }
  };
  
  export default reducer;