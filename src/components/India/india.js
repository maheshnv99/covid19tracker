import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import Countup from 'react-countup';
import styles from './india.module.css';
import cx from 'classnames';

import Indiagraph from './indiagraph.js';



const India = ({countrydata:{confirmed,active,recovered,deaths,achanges,rchanges,dchanges,cchanges}}) => {
    if(!confirmed){return("loading..");}
    return(
    <div className={styles.container}>
<label className={styles.label}>Cases of Covid19 in India</label>
<Grid container spacing={3} justify="center">

<Grid item component={Card} xs={12} md={2} className={cx(styles.test,styles.infected)}>

<CardContent>
<Typography color="textPrimary" variant="h5" gutterBottom>Confirmed</Typography>
    <Typography variant="h5">
        <Countup 
        start={0}
        end={confirmed}
        duration={3}
        separator=','       
        />
        </Typography>
<Typography variant="body2" gutterBottom>Number of Confirmed Cases</Typography>
    <Typography variant="h6" gutterBottom>Newly Confirmed:<Countup 
        start={0}
        end={cchanges}
        duration={3}
        separator=','       
        /></Typography>

</CardContent>

</Grid>
<Grid item component={Card} xs={12} md={2} className={cx(styles.test,styles.active)}>

<CardContent>
<Typography color="textPrimary" variant="h5" gutterBottom>Active</Typography>
    <Typography variant="h5">
        <Countup 
        start={0}
        end={active}
        duration={3}
        separator=','       
        />
        </Typography>
<Typography variant="body2"  gutterBottom>Number of Active Cases</Typography>
    <Typography variant="h6" gutterBottom>New Cases:<Countup 
        start={0}
        end={achanges}
        duration={3}
        separator=','       
        /></Typography>

</CardContent>

</Grid>

<Grid item component={Card} xs={12} md={2} className={cx(styles.test,styles.recovered)}>
<CardContent>
<Typography color="textPrimary" variant="h5" gutterBottom>Recovered</Typography>
<Typography variant="h5"> <Countup 
        start={0}
        end={recovered}
        duration={3}
        separator=','       
        /></Typography>
<Typography variant="body2" gutterBottom>Number of Cases recovered</Typography>
<Typography variant="h6" gutterBottom>Newly recovered:<Countup 
        start={0}
        end={rchanges}
        duration={3}
        separator=','       
        /></Typography>



</CardContent>



</Grid>

<Grid item component={Card} xs={12} md={2} className={cx(styles.test,styles.deaths)}>
<CardContent>
<Typography color="textPrimary" variant="h5" gutterBottom>Deaths</Typography>
<Typography variant="h5"> <Countup 
        start={0}
        end={deaths}
        duration={3}
        separator=','       
  /></Typography>
    
<Typography variant="body2" gutterBottom>Total death Cases</Typography>
<Typography variant="h6" gutterBottom>New Deaths:<Countup 
        start={0}
        end={dchanges}
        duration={3}
        separator=','       
        /></Typography>



</CardContent>



</Grid>

<Grid item component={Card} className={styles.indiabar} xs={12} md={12}>
    <br />
    <Indiagraph confirmed={confirmed} recovered={recovered} deaths={deaths} active={active} />

</Grid>


</Grid>


            </div>


);}
export default India;