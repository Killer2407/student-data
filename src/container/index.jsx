import React,{useState,useEffect,useRef} from 'react';
import Card from '../components/card/';
import Search from '../components/search';
import {getData} from '../service/api';
import './index.css';


const HomePage = () => {
    const [students, setStudents] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const [filterNameData, setFilterNameData] = useState([]);
    const [filterTagData, setFilterTagData] = useState([]);
    const [tag,setTag] = useState('');
    const [searchTag, setSearchTag] = useState('');
    const [searchName,setSearchName] = useState('');


    useEffect(() => {
         getData().then(d=>{
            console.log('data',d.data.students);
            setStudents(d.data.students);
            setFilteredData(d.data.students);
        }).catch(err=>{
            console.log('err',err);
        })
    },[])

    useEffect(() => {
        // case 1: dont filter anything  -- show student data
        if(searchTag === '' && searchName === ''){
            setFilteredData(students);
        }
        // case 2: filter by name and tag is empty  -- show only filter by names
        else if(searchName!=='' && !searchTag){
            setFilteredData(filterNameData);
        }
        // case 3: filter by name and tag -- show both filters
        else if (!searchName && searchTag!==''){
            setFilteredData(filterTagData);
        }
        // case 4: filter by name and tag -- show both filters
        else if(searchName!=='' && searchTag!==''){
            console.log('object',filterTagData);
            setFilteredData([
                ...filterNameData,
                ...filterTagData
            ])
        }
    }, [filterNameData,filterTagData])


        const filterDataByName =( e )=>{
        const name = e.target.value;
        setSearchName(name);
        
        const tempData = [];
        students.forEach(student=>{
            if(student.firstName.toLowerCase().includes(name)){
                tempData.push(student);
            }
        })

        console.log('name',tempData);
            setFilterNameData([
                ...tempData,
            ]);
    }

    const filterDataByTags =( e )=>{
            const tagged = e.target.value;
            setSearchTag(tagged);
            let tempData = [];
            
            students.forEach(student=>{
                if(student.tags){
                console.log('st',student);
                student.tags.forEach(t=>{
                    if(t.toLowerCase().includes(tagged)){
                    tempData.push(student);
                    }
                })
                }
            })
            setFilterTagData(tempData);
    }


    const addTag = (e)=>{
        console.log('log tag',e.target.value);
        setTag(e.target.value);
    }

    const keyPress =(e,student)=>{
        if(e.key === 'Enter'){            
            setFilterTagData(filteredData.map((s,idx)=>{
                if(s.firstName === student.firstName){
                    if(s.tags){
                        s.tags.push(tag);
                    }else{
                        s.tags = [tag];
                    }
                }
                return s;
            }));
          }
    }

    return (
        
        <>
        {console.log('render')}
        <Search students = {students} filter={filterDataByName} type ='name' />
        <Search students = {students} filter={filterDataByTags} type ='tags' />

        {filteredData && filteredData.map((student,index)=>{
            return <Card key = {index} student= {student} addTag={addTag} keyPress={(e)=>keyPress(e,student)} refresh={tag} ></Card>
        })}
        </>
    );

}

export default HomePage;



