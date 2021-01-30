import React, {useContext} from 'react'
import { SearcherContext } from '../context/SearcherContext';

export const Buscador = () => {
  // Extract the categories value.
  const { setSearcherText } = useContext(SearcherContext);
    return (
    <div className="barra-container">
        <input type="text" className="btn-buscar"/>
        <input type="text" className="barra-buscar" onChange={ e => setSearcherText(e.target.value)} placeholder="Search by name or title" />
      </div>
    )
}
