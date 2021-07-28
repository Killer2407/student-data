import axios from 'axios';
import URI from '../config';

const  getData = ()=>{

    const service = axios.create();
   return service.get(URI,{
   });
}

export  {getData};