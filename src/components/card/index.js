import React,{useEffect,useState} from 'react'
import './index.css';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Card = ({student, addTag,keyPress,refresh}) => {
   
    const s = JSON.stringify(student);
    const [data,setData] = useState();
    const [sign, setSign] = useState(false);
    useEffect(() => {
        setData(student);
    },[s]);

    const average = (arr) =>{
        const reducer = (acc, curr) => parseInt(acc) + parseInt(curr);
        const sum = arr.reduce(reducer);      
        return sum / arr.length;
    }

    const clicked = ()=>{
        setSign(!sign);
        console.log('clicked');
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
                    <div className="Info--Data_main">
                    <p> Email: {student.email}</p>
                    <p> Company: {student.company}</p>
                    <p> Skill: {student.skill}</p>
                    <p> Average: { average(student.grades)} %</p>
                    <div className="Info--Data_testScore">
                    { sign && student.grades.map((grade,index)=>{
                        return <p   key= {index}> <span>{`Test ${index+1}:`} </span> &nbsp;	&nbsp; <span> {`${grade} %`} </span>  </p>
                    })}
                    </div>
                    <div className="Info--Data_tags">
                    {s && student.tags &&  student.tags.map((tag,idx)=>{
                        return <div key ={idx} className="chip">{tag} </div>
                    })}
                     </div>

                    <input className="tagInput" onKeyPress={keyPress} onChange={addTag} placeholder='Add a tag'/>
                    </div>
                    
                </div>
            </div>
            <div>
               {!sign? <AddIcon style={{cursor: 'pointer'}} onClick={clicked}/>: <RemoveIcon style= {{cursor: 'pointer'}}onClick={clicked}/>} 
            </div>
        </div>
        }
        </>
    )
}

export default Card;

