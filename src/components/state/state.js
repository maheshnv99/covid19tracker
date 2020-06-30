import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import {getstatenames} from '../api';

const States = ({selector}) => {
    const [fetchdata,setfetchdata]=useState([]);

    useEffect(()=>{



    const fetch= async () =>{
        setfetchdata(await getstatenames());


}
fetch();

},[setfetchdata]);



    return (
        <FormControl>
                <NativeSelect defaultValue="" onChange={(e)=>{selector(e.target.value)}}>
                    <option value="select">Select State</option>
    {fetchdata.map((state,index)=><option key={index} value={index}>{state}</option>)}



                </NativeSelect>



        </FormControl>



    );
}







export default States;

















