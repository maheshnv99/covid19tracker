import React from 'react';
import styles from './covidtracker.module.css';
import World from './World/world';
import India from './India/india';
import States from './state/state';
import Stategraph from './state/stategraph';
import {getworlddata,getcountrydata,getstatedata} from './api';
class Covidtracker extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        worlddata:{},
        countrydata:{},
        statedata:{},
        statenames:{},
        stateselect:'',
        selecteddata:{}
    };
}
async componentDidMount(){

    const k= await getworlddata();
    const q= await getcountrydata();
    const s= await getstatedata();
    let statename=[];
    for(let i=0;i<s.length;i++){
        statename.push(s[i].state);

    }
    this.setState({statenames:statename});
    this.setState({statedata:s});
    
    this.setState({worlddata:k});

    this.setState({countrydata:q});
}
    
stateselector= async (state)=>{
   if (state==="select"){
       this.setState({stateselect:""});
   } 
   else{
    let k=this.state.statedata[state];
    const selectdata={
    confirmed:k.confirmed,
    active:k.active,
    recovered:k.recovered,
    deaths:k.deaths,
    cchanges:k.cchanges,
    achanges:k.achanges,
    rchanges:k.rchanges,
    dchanges:k.dchanges,
    
    
    
    }
    
    
    
    
    
    this.setState({stateselect:this.state.statenames[state],
        selecteddata:selectdata
    
    
    
    })
    
    
    


   }

}

    render() {
        return (<div className={styles.container}>

                <World  worlddata={this.state.worlddata}/>
                <India countrydata={this.state.countrydata}/>
                 <States selector={(state)=>this.stateselector(state)}/> 
         <div>{
            !(this.state.stateselect==='')?(<Stategraph data={this.state.selecteddata} stateselected={this.state.stateselect} />):null
            
            }</div>


        </div>);
    }
}

export default Covidtracker;