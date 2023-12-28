import React, { ChangeEvent, useContext, useRef } from 'react'
import { searchApi } from '../api';
import { PlacesContext } from '../context';
import SearchResults from './SearchResults';

export const SearchBar = () => {

    const debounceRef = useRef<NodeJS.Timeout>()

    const {searchPlacesByTerm} = useContext(PlacesContext)

    const onQueryChange = (query: ChangeEvent<HTMLInputElement>) => {

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            searchPlacesByTerm(query.target.value)            
        }, 2000)
        
    }

  return (
    <div className='search-container'
    >
        <input type="text" className='form-control' placeholder='Buscar un lugar...' onChange={onQueryChange} />
        <SearchResults/>
    </div>
  )
}

export default SearchBar
