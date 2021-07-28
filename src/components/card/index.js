import React,{useEffect,useState} from 'react'
import './index.css';
import Avatar from '@material-ui/core/Avatar';

const Card = ({student}) => {
    console.log('hit card',student )
    // console.log('studnet in card',student.student);
    const [data,setData] = useState();
    useEffect(() => {
        setData(student);
    }, [])


    const average = (arr) =>{
        const reducer = (acc, curr) => parseInt(acc) + parseInt(curr);
        // console.log('arr',arr)
        const sum = arr.reduce(reducer);      
        //   console.log('average',sum)
        return sum / arr.length;
    }

    return (
        <>
        {
        <div className="Container"> 
            <div className="Avatar"> 
            <Avatar className ="Avatar--Img">{student.firstName.slice(0,1)}</Avatar>
            </div>
            <div className="Info">
                <h1 className="Info--Title"> {student.firstName.toUpperCase()} </h1>
                <div className="Info--Data">
                    <h3> Email: {student.email}</h3>
                    <h3> Company: {student.company}</h3>
                    <h3> Skill: {student.skill}</h3>
                    <h3> Average: { average(student.grades)} %</h3>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default Card;


/** 
 * import React,{useEffect,useState} from 'react'
import './index.css';
import Avatar from '@material-ui/core/Avatar';
// import 
// const style = {
//     container: {
//             backgroundColor: 'red',
//             color:'black',
//             padding:10,
//             // borderRadius: 'solid black 3px'
//    }
// }
const Card = (student,key) => {
    console.log('hit card',student, key )
    // console.log('studnet in card',student.student);
    const [data,setData] = useState();
    useEffect(() => {
        setData(student.student);
    }, [])


    const average = (arr) =>{
        const reducer = (acc, curr) => parseInt(acc) + parseInt(curr);
        // console.log('arr',arr)
        const sum = arr.reduce(reducer);      
        //   console.log('average',sum)
        return sum / arr.length;
    }

    return (
        <>
        {data && 
        <div className="Container"> 
            <div className="Avatar"> 
            <Avatar className ="Avatar--Img">{data.firstName.slice(0,1)}</Avatar>
            </div>
            <div className="Info">
                <h1 className="Info--Title"> {data.firstName.toUpperCase()} </h1>
                <div className="Info--Data">
                    <h3> Email: {data.email}</h3>
                    <h3> Company: {data.company}</h3>
                    <h3> Skill: {data.skill}</h3>
                    <h3> Average: { average(data.grades)} %</h3>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default Card;

*/