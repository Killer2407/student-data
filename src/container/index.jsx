import { KeyboardReturnOutlined } from '@material-ui/icons';
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


    // useEffect(() => {
    //     console.log('tag in filterNameData  effect',tag);
    //     console.log('name in filterNameData effect',name);

    //     setFilteredData([
    //         // ...filterTagData,
    //         ...filterNameData,
    //         // ...filterTagData
    //         ])
    // }, [filterNameData])

    // useEffect(() => {
    //     console.log('tag in filterTagData  effect',tag);
    //     console.log('name in filterTagData effect',name);
    //     // if(tag && name===''){
    //     //     setFilteredData([
    //     //         // ...filterNameData,
    //     //         ...filterTagData,
    //     //         ])
    //     // }else if (tag ==='' && name){
    //     //     setFilteredData([
    //     //         // ...filterTagData,
    //     //         ...filterNameData,
    //     //         // ...filterTagData
    //     //         ])
    //     // }else if (tag === '' && name===''){
    //     //     setFilteredData(
    //     //         // ...filterTagData,
    //     //         students
    //     //         // ...filterTagData
    //     //         )
    //     // }else {
    //     //     setFilteredData([
    //     //         ...filterTagData,
    //     //         ...filterTagData
    //     //         ])
    //     // }

                
    // }, [filterTagData,filterNameData])


    // useEffect(()=>{
    //     setFilteredData(filterNameData)
    // },[filterTagData,filterNameData])

    // useEffect(() => {

    //     // console.log('set',set.keys());
    //     console.log('tag data',filterTagData);
    //     console.log('name data',filterNameData);
    //     // if(filterTagData.length>0 && filterNameData.length ===0 ){
    //     //     setFilteredData([
    //     //         ...filterTagData,
    //     //         // ...filterNameData
    //     //     ])
    //     // }else if(filterTagData.length ===0 && filterNameData.length>0 ){
    //     setFilteredData([
    //         ...filterTagData,
    //         ...filterNameData
    //     ])
    // // }
    // }, [filterTagData,filterNameData])

 
    const filterDataByName =( e )=>{
        const name = e.target.value;
        // console.log('val',e.target.value);
        setSearchName(name);
        // setName(e.target.value);
        
        const tempData = [];
        // students.filter(student => {
        //    return student.firstName.toLowerCase().includes(name) ? true :false;
        // })
        students.forEach(student=>{
            if(student.firstName.toLowerCase().includes(name)){
                tempData.push(student);
            }
        })

        console.log('name',tempData);

        // if(filterTagData)
        // if(tag){
            setFilterNameData([
                ...tempData,
                // ...filterTagData
            ]);
        // }else{
        //     setFilterNameData(tempData);
        // }

        // setFilteredData(
        //     filterNameData,
        //     // ...filterTagData
        // );
        // }

    }

    const filterDataByTags =( e )=>{

        // ref.current = e.target.value;
            // setInput(e.target.value);
            const tagged = e.target.value;
            setSearchTag(tagged);
            // console.log('tag changed in search bar',tagged);
            // setTag
            // if(e.target.value === ''){
                // setFilteredData(students);
            //     console.log('here',students);
            //     setFilterTagData([
            //         ...filterNameData]);
            // }else if(e.target.value === '' && name ===''){
            //     setFilterTagData([
            //         ...students
            //     ])
            // }else {

            //     if(filterNameData){
            //     setFilteredData([
            //         ...filterNameData
            //     ]);
            // }else{
            //     setFilteredData([
            //         ...students
            //     ]);
            // }
            // }else{
            // console.log('val in tags',e.target.value);
            // console.log('student',students)
            let tempData = [];
            
            // students.filter(student => {
            //     //  console.log('tags fi',student);
            //     //  if(student.tags){
            //          console.log('stu tag',student);
            //     //     return  student.tags.filter(t=>{
            //     //         console.log('tags',t);
            //     //         return t.toLowerCase().includes(tag) ? true :false;
            //     //      })
            //         // return student.tags?true:false;
            //         // if(student.tags){
            //         //     let t = student.tags.filter()
            //         // }
            //     //  }
            //     // return student.tags? true : false

            //     if(student.tags){
            //         console.log('st',student.tags)
            //        return student.tags.filter(t=>{
            //             return t.toLowerCase().includes(tag)?true:false;
            //         })
            //     }
            // })
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



            // console.log('temp by tags',tempData)
            // const tempData = students.filter(student => {
            //     return student.firstName.toLowerCase().includes(tag) ? true :false;
            //  })
            setFilterTagData(tempData);
            // setFilteredData([
            //     ...filterNameData,
            //     ...filterTagData]);
        // }
    }


    const addTag = (e)=>{
        console.log('log tag',e.target.value);
        setTag(e.target.value);
    }

    const keyPress =(e,student)=>{
        // console.log('keypress',student)
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
         {/* <input type="text" name="search" onChange={(e)=>handleChange(e)} 
        placeholder= {'Search by name'}/> */}
        {/* // <Search students= > </Search> */}
        {/* <div className="container"> */}
        <Search students = {students} filter={filterDataByName} type ='name' />
        <Search students = {students} filter={filterDataByTags} type ='tags' />

        {/* <Search students = {students} type ='tags' /> */}
        {/* </div> */}
        {/* <Search students = {students} type ='tag' /> */}
        {/* {console.log('fd',filteredData.length)} */}
        {filteredData && filteredData.map((student,index)=>{
            // console.log('idx1',student);
            return <Card key = {index} student= {student} addTag={addTag} keyPress={(e)=>keyPress(e,student)} refresh={tag} ></Card>
        })}
        {/* <Card> </Card> */}
        </>


    );

}

export default HomePage;



/*
case 1:
    filter by name and tag is empty --done
        show only filter by names

case 2:
    fiter by tag and name is empty  --done
        show only filter by tags

case 3: filter by name and tag
        show both filters

case 4: dont filter anything  -- done
        show student data



*/