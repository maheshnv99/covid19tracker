import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import Countup from 'react-countup';
import styles from './world.module.css';
import cx from 'classnames';
import Worldgraph from './worldgraph';




const World = ({worlddata:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){return("loading..");}
    return(
    <div className={styles.container}>
        <label className={styles.label}>WorldWide Cases of Covid19</label>
<Grid container spacing={3} justify="center">

<Grid item component={Card} xs={12} md={3} className={cx(styles.test,styles.infected)}>

<CardContent>
<Typography color="textPrimary" variant="h5" gutterBottom>Confirmed</Typography>
    <Typography variant="h5">
        <Countup 
        start={0}
        end={confirmed}
        duration={2}
        separator=','       
        />
        </Typography>
    <Typography color="textPrimary" gutterBottom><br />Last updated on:<br />{new Date(lastUpdate).toDateString()}</Typography>
<Typography variant="body2" gutterBottom>Number of Confirmed cases</Typography>
</CardContent>

</Grid>

<Grid item component={Card} xs={12} md={3} className={cx(styles.test,styles.recovered)}>
<CardContent>
<Typography color="textPrimary" variant="h5" gutterBottom>Recovered</Typography>
<Typography variant="h5"> <Countup 
        start={0}
        end={recovered}
        duration={2}
        separator=','       
        /></Typography>
    <Typography color="textPrimary" gutterBottom><br />Last updated on:<br />{new Date(lastUpdate).toDateString()}</Typography>
<Typography variant="body2" gutterBottom>Number of Recovered cases</Typography>



</CardContent>



</Grid>

<Grid item component={Card} xs={12} md={3} className={cx(styles.test,styles.deaths)}>
<CardContent>
<Typography color="textPrimary" variant="h5" gutterBottom>Deaths</Typography>
<Typography variant="h5"> <Countup 
        start={0}
        end={deaths}
        duration={2}
        separator=','       
  /></Typography>
    <Typography color="textPrimary" gutterBottom><br />Last Updated on:<br />{new Date(lastUpdate).toDateString()}</Typography>
<Typography variant="body2" gutterBottom>Number of Deaths</Typography>



</CardContent>



</Grid>
<Grid item component={Card} className={styles.worldbar} xs={12} md={12}>
    <br />
    <Worldgraph confirmed={confirmed} recovered={recovered} deaths={deaths} />

</Grid>



</Grid>


            </div>


);}
export default World;