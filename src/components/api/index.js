
import axios from 'axios';
const worldurl="https://covid19.mathdro.id/api";
const countryurl="https://api.covidindiatracker.com/total.json";
const stateurl = "https://api.covidindiatracker.com/state_data.json";
export const getworlddata = async ()=>{
try{

    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(worldurl);
    return ({confirmed:confirmed.value,recovered:recovered.value,deaths:deaths.value,lastUpdate});


}
catch(error){


}

}
export const getcountrydata= async () =>{
try{
        const {data:{confirmed,active,recovered,deaths,achanges,rchanges,dchanges,cchanges}}=await axios.get(countryurl);
        return ({confirmed,active,recovered,deaths,cchanges,achanges,rchanges,dchanges});


}


catch(error){

}



} 
export const getstatedata= async () =>{
    try{
            const {data}=await axios.get(stateurl);
         
           return data;
    
    
    }
    catch(error){
    
    }
    
    
    } 
    export const getstatenames= async () =>{
        try{
                const {data}=await axios.get(stateurl);
                let names=[];
                for(let i=0;i<data.length;i++){
                    names.push(data[i].state);

                }
                
             
               return names;
        
        
        }
        catch(error){
        
        }

    }