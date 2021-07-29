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


    useEffect(() => {

         getData().then(d=>{
            // console.log('data',d.data.students);
            setStudents(d.data.students);
            setFilteredData(d.data.students);
        }).catch(err=>{
            console.log('err',err);
        })
    },[])

    // useEffect(() => {
    //     // setFilteredData([
    //     //     ...filterTagData,
    //     //     ...filterNameData
    //     // ])
    //     console.log('hit');
    //     if(filteredData && filterTagData && filteredData.length===0 && filterTagData.length===0){
    //         setFilteredData(students);
    //     }else{
    //         console.log('hit 2');
    //         setFilteredData([
    //             ...filteredData,
    //             ...filterTagData
    //         ])
    //     }

    // }, [filterTagData,filterNameData])


    useEffect(() => {
        setFilteredData([
            ...filterNameData,
            // ...filterTagData
            ])
    }, [filterNameData])

    useEffect(() => {
        console.log('tags useEffect',filterTagData)
        setFilteredData([
            ...filterTagData,
            ])
    }, [filterTagData])
 
    const filterDataByName =( e )=>{

    // ref.current = e.target.value;
        // setInput(e.target.value);
        // if(e.target.value ===''){
        //     if(filterTagData){
        //         setFilteredData([
        //             ...filterTagData
        //         ]);
        //     }else{
        //         setFilteredData([
        //             ...students
        //         ]);
        //     }
            
        // }
        // else{
        const name = e.target.value;
        console.log('val',e.target.value);
        const tempData = students.filter(student => {
           return student.firstName.toLowerCase().includes(name) ? true :false;
        })
        console.log('name',tempData);
        setFilterNameData(tempData);

        // setFilteredData(
        //     filterNameData,
        //     // ...filterTagData
        // );
        // }

    }

    const filterDataByTags =( e )=>{

        // ref.current = e.target.value;
            // setInput(e.target.value);
            const tag = e.target.value;
            console.log('tag changed in search bar',tag);
            if(e.target.value === ''){
                console.log('here',students);
                setFilterTagData(students);
            }else{

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
                    if(t.toLowerCase().includes(tag)){
                    tempData.push(student);
                    }
                })
                }
            })



            console.log('temp by tags',tempData)
            // const tempData = students.filter(student => {
            //     return student.firstName.toLowerCase().includes(tag) ? true :false;
            //  })
            setFilterTagData(tempData);
            // setFilteredData([
            //     ...filterNameData,
            //     ...filterTagData]);
        }
    }


    const addTag = (e)=>{
        console.log('log tag',e.target.value);
        setTag(e.target.value);
    }

    // const filterDataByTag =( e )=>{

    //     // ref.current = e.target.value;
    //         // setInput(e.target.value);
    //         const tag = e.target.value;
    //         console.log('val',e.target.value);
    //         const tempData = students.filter(student => {
    //            return student.firstName.toLowerCase().includes(tag) ? true :false;
    //         })
    //         setFilteredData(tempData);
    
    //     }


    // handle change 
    // const handleChange = (event)=>{
  
    //     inputRef.current = event.target.value;

    //     setInput({[event.target.name]:event.target.value});
    //     console.log('event',inputRef.current);
    // }

    // console.log('query',query);


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
        {console.log('fd',filteredData.length)}
        {filteredData && filteredData.map((student,index)=>{
            // console.log('idx',student);
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