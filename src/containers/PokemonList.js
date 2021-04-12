import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {GetPokemonList} from '../actions/PokemonActions';
import {Link} from "react-router-dom";


const PokemonList = () => {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList );
    
    React.useEffect(()=> {
        FetchData(1)
    }, []) 

    const FetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
    }


    const showData = () =>{
        if(!_.isEmpty(pokemonList.data))
        {
            return (
                <div className={"list-wrapper"}>
                    { pokemonList.data.map(el => {
                    return (
                        <div className={"pokemon-item"}>
                            <p>{el.name}</p>
                            <Link to={`/pokemon/${el.name}`} >View</Link>
                        </div>
    
                    )
                })}
                </div>
               
            ) 
        }

        if(pokemonList.isloading)
        {
            return <p>Loading.....</p>
        }

        if(pokemonList.errorMessage !== "" )
        {
            return <p> {pokemonList.errorMessage} </p>
        }

        return <p>Unable to get data</p>

    }

    return (
        <div>
            {showData()}
        </div>
    )

}

export default PokemonList
