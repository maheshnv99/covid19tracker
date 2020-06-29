import React from 'react';
import {Bar} from 'react-chartjs-2';


const Indiagraph = ({confirmed,recovered,deaths,active}) => {
    const barchart=(
        confirmed?(<Bar 
        data={{labels:["Confirmed","Active","Recovered","Deaths"],
        datasets:[{label:"Cases",
        backgroundColor:['rgba(0,0,255,0.5)','rgba(255,0,0,0.5)','rgba(0,255,0,0.5)','rgba(0,0,0,0.5)'],
        data:[confirmed,active,recovered,deaths]
       }]
        
        
        }}
        options={{legend:{display:false}
    ,title:{display:true ,text:"Covid 19 cases in india"}
    
    }}
        
        
        
        />):null
    )
    
    
    
    return (<div>
        {confirmed?barchart:null}
    </div>);
}


export default Indiagraph;