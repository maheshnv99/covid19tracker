import React from 'react';
import {Bar} from 'react-chartjs-2';


const Worldgraph = ({confirmed,recovered,deaths}) => {
    const barchart=(
        confirmed?(<Bar 
        data={{labels:["Confirmed","Recovered","Deaths"],
        datasets:[{label:"Cases",
        backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(0,0,0,0.5)'],
        data:[confirmed,recovered,deaths]
       }]
        
        
        }}
        options={{legend:{display:false}
    ,title:{display:true ,text:"current cases worldwide"}
    
    }}
        
        
        
        />):null
    )
    
    
    
    return (<div>
        {confirmed?barchart:null}
    </div>);
}


export default Worldgraph;