import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import InstagramIcon from '@material-ui/icons/Instagram';
import PersistentDrawerLeft from './Drawer';
import Proj from '../Component/Common/Project';
import ourTeamArr from './Common/OurTeamsDetails';
import { Zoom } from 'react-reveal';
import FooterComponent from './FooterComponent';
import A5 from './assets/Photos/A5.jpg';
const useStyles = makeStyles((theme) => ({
 icon: {
 marginRight: theme.spacing(2),
 },
 heroContent: {
 backgroundColor: theme.palette.background.paper,
 padding: theme.spacing(8, 0, 6),
 },
 cardGrid: {
 paddingTop: theme.spacing(8),
 paddingBottom: theme.spacing(8),
 },
 card: {
 height: '100%',
 display: 'flex',
 flexDirection: 'column',
 },
 cardMedia: {
 paddingTop: '70%', // 16:9
 },
 cardContent: {
 flexGrow: 1,
 },

}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15];
export default function Album() {
 const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
        <PersistentDrawerLeft />
        <main style={{backgroundColor:'#4a4945'}}>
        {/* Hero unit */}
        <div style={{backgroundColor:'#4a4945'}} className={classes.heroContent}>
        <Zoom>
        <Container maxWidth="sm">
        <Typography style={{color:'white'}} component="h1" variant="h2" align="center"
        color="textPrimary" gutterBottom>
        Our Team
        </Typography>
        <Typography style={{color:'white'}} variant="h5" align="center" color="textSecondary"
        paragraph>
        "Talent wins games, but teamwork and intelligence win championships." --Michael Jordan.
        </Typography>

        </Container>
        </Zoom>
        </div>
        <Container style={{alignContent:'center' ,alignItems:'center'}} className={classes.cardGrid}
        >
        {/* End hero unit */}
        <Grid justify="center" alignContent="center" container spacing={4}>
        {ourTeamArr.map(e => {
            return(
                <Grid style={{boxShadow: '-9px -9px 15px #636262 , 9px 9px 45px #303030',

            marginLeft:'70px',marginRight:'60px',marginTop:'25px',marginBottom:'25px',borderRadius:"25px"
            }} item key={1} xs={12} sm={6} md={4}>
            
            <Card style={{backgroundColor:'#4a4945'}} className={classes.card}>
                    <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                    >
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                    <Typography style={{color:'white'}} gutterBottom variant="h5" component="h2">
                        {e.name}
                    </Typography>
                    <Typography style={{color:'white'}}>
                    {e.position}
                    </Typography>
                    <br/>
                    <a href={e.linkedin}><LinkedInIcon style={{fontSize:'40px',color:'#2c618f',boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414',marginLeft:'5px'
                    ,borderRadius:'25px' ,padding:'5px'}} /></a>
                    <a href={"mailto:"+e.email}><AlternateEmailIcon style={{fontSize:'40px',color:'#d4493f',boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414'
                    ,marginLeft:'25px',borderRadius:'25px' ,padding:'5px'}}/></a>
                    </CardContent>
            
                    </Card>
            </Grid>
            );
        })}
        

        </Grid>
        </Container>
        </main>
        {/* Footer */}
        {/* End footer */}
        </React.Fragment>
    );
}