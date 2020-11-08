export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const CLEAR_SEARCH_VAL = "CLEAR_SEARCH_VAL";

export const setSearchProducts=(payload)=>{
    return {type:SEARCH_PRODUCTS,payload:payload};
}

export const clearSearchValue=()=>{
    return {type:CLEAR_SEARCH_VAL}
}