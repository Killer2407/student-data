import React,{useState,useEffect,useRef} from 'react'
import './index.css';
import Card from '../card/';

function Search({students,type , filter}) {

    const [input, setInput] = useState('');
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const ref = useRef(0);

    return (
       
        <>
        <input type="text" className="Search" name="search" onChange={filter}  placeholder= {`Search by ${type}`}/>
        </>
    )
}

export default Search
