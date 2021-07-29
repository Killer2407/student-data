import React,{useState,useEffect,useRef} from 'react'
import './index.css';
import Card from '../card/';


function Search({students,type , filter}) {

    const [input, setInput] = useState('');
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const ref = useRef(0);

    // useEffect(() => {
    //     setData(students);
    // },[students]);

    // console.log('type',type);
    // console.log('students',students);
    // const handleChange = (e)=>{
    //     ref.current = e.target.value;
    //     setInput(e.target.value);
    //     filter(e);
    //     // console.log('val',e.target.value);
    //     // const temp = students.filter(student => {
    //     //    return student.firstName.toLowerCase().includes(ref.current) ? true :false;
    //     // })
    //     // console.log('temp',temp);
    //     // setData(temp);
    // }

    // useEffect(() => {
    // },[input]);

    return (
       
        <>
        <input type="text" className="Search" name="search" onChange={filter}  placeholder= {`Search by ${type}`}/>
        {/* {data && data.map((student,index)=>{
            // console.log('idx',student);
            return <Card key = {index} student = {student}></Card>
        })} */}

        {/* <StudentList data = {data}/> */}
        </>
    )
}

export default Search
