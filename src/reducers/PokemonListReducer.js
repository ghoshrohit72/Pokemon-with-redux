const defaultState ={
    loading : false,
    data: [],
    errorMessage: "",
    count: 0

}

const PokemonListReducer = (state=defaultState, action) => {
    switch(action.type)
    {
        case "POKEMON_LIST_LOADING":
            return{
                ...state,
                loading: true,
                errorMessage: ""
            };
        case "POKEMON_LIST_SUCCESS":
            return{
                ...state,
                loading: false,
                data : action.payload.results,
                errorMessage: "",
                count: action.payload.count
            };        
        case "POKEMON_LIST_FAIL":
                return{
                    ...state,
                    loading: false,
                    errorMessage: "Failed to get Pokemons"
                };  
        default:  return state
    }
}

export default PokemonListReducer;