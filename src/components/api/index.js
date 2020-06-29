
import axios from 'axios';
const worldurl="https://covid19.mathdro.id/api";
const countryurl="https://api.covidindiatracker.com/total.json";
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
