import React,{useState,useEffect,useRef} from 'react'
import './index.css';
import Card from '../card/';


function Search({students,type}) {

    const [input, setInput] = useState('');
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const ref = useRef(0);

    useEffect(() => {
        setData(students);
    },[students]);

    // console.log('type',type);
    // console.log('students',students);
    const handleChange = (e)=>{
        // setLoading(true);
        ref.current = e.target.value;
        setInput(e.target.value);
        console.log('val',e.target.value);
        const temp = students.filter(student => {
           return student.firstName.toLowerCase().includes(ref.current) ? true :false;
        })
        console.log('temp',temp);
        // setInput();
        // setLoading(false);
        setData(temp);
    }


    

    useEffect(() => {
    },[input]);

    return (
       
        <>
            <input type="text" name="search" onChange={handleChange}  placeholder= {`Search by ${type}`}/>
            {/* {students && students.map((student,index)=>{

           return  <Card key = {index} student= {student}/>
        // return <Card key ={index}> </Card>
        })} */}
        {/* {      data && console.log('students len', data.length) 
} */}

        {data && data.map((student,index)=>{
            // console.log('idx',student);
            return <Card key = {index} student = {student}></Card>
            // return <h1>{student.firstName } {index }</h1>
        })}
        
        {/* {!loading && <h1>hellow</h1>} */}
        </>
    )
}

export default Search
