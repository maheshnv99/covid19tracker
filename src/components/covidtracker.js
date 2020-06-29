import React from 'react';
import styles from './covidtracker.module.css';
import World from './World/world';
import India from './India/india';
import States from './state/state';
import {getworlddata,getcountrydata} from './api';
class Covidtracker extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        worlddata:{},
        countrydata:{},
    };
}
async componentDidMount(){

    const k= await getworlddata();
    const q= await getcountrydata();
    
    this.setState({worlddata:k});

    this.setState({countrydata:q});
}
    

    render() {
        return (<div className={styles.container}>

                <World  worlddata={this.state.worlddata}/>
                <India countrydata={this.state.countrydata}/>
                {/* <States /> */}


        </div>);
    }
}

export default Covidtracker;