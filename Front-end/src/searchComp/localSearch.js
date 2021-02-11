import React, {useState} from "react";
import "./style/localSearch.scss";
import { useDispatch } from 'react-redux'

function Localsearch(props) {
  const dispatch = useDispatch();

  const [filteredResultKey, setFilteredResultKey] = useState('');
  return (
    <div className="local-search">
      <h5>Local Search</h5>
      <input value={filteredResultKey} onChange={(e)=>{
        setFilteredResultKey(e.target.value);
        dispatch({ type: 'updateLocalSearchKey', payload:e.target.value });
      }}></input>
    </div>
  );
}

Localsearch.propTypes = {};

export default Localsearch;
