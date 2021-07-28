import React,{useState,useEffect,useRef} from 'react';
import Card from '../components/card/';
import Search from '../components/search';
import {getData} from '../service/api';


const HomePage = () => {
    const [students, setStudents] = useState();
    const [input, setInput] = useState('');
    const [data, setData] = useState(null);
    const inputRef = useRef(0);
    inputRef.current = input;

    // usestate for filering data
    // const [query, setQuery] = useState({name:""});
    // const [data, setData] = useState();
    // const ref = useRef(query);


    useEffect(() => {

         getData().then(d=>{
            console.log('data',d.data.students);
            setStudents(d.data.students);
        }).catch(err=>{
            console.log('err',err);
        })

    },[])

 


    // const filterData = ()=>{
    //     // const tempData = students.filter(student=>{
    //     //     let name = student.firstName;
    //     //     if(name.includes(query)){
    //     //         console.log('name',query,name)

    //     //     }
    //     //         // console.log(student.firstName.contains(query));     
    //     // }) 
    //     console.log('input',input)
    // }

    // handle change 
    const handleChange = (event)=>{
  
        inputRef.current = event.target.value;

        setInput({[event.target.name]:event.target.value});
        console.log('event',inputRef.current);
    }

    // console.log('query',query);

    return (
        <>
         {/* <input type="text" name="search" onChange={(e)=>handleChange(e)} 
        placeholder= {'Search by name'}/> */}
        {/* // <Search students= > </Search> */}
        <Search students = {students} type ='name' />
        {/* {students && students.map((student,index)=>{
            // console.log('idx',student);
            return <Card key = {index} student= {student}></Card>
        })} */}
        {/* <Card> </Card> */}
        </>


    );

}

export default HomePage;