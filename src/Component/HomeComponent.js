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
import AnnouncementIcon from '@material-ui/icons/Announcement';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import PersistentDrawerLeft from './Drawer';
import { Zoom, Fade, LightSpeed } from 'react-reveal';
import FooterComponent from './FooterComponent';
import rnxgW from './assets/rnxgW.png';
const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    media: {
        paddingTop: '60%', // 16:9
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));
const cards = [1, 2];
export default function Album1() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <PersistentDrawerLeft />
            <main style={{ backgroundColor: '#302c2c', marginBottom: '5px' }}>
                {/* Hero unit */}
                <div style={{ backgroundColor: '#302c2c' }} className={classes.heroContent}>
                    <Container align="center" style={{ backgroundColor: '#302c2c' }} >
                        <Zoom>
                            <img src={rnxgW} align="center" style={{ fontSize: '30px', color: '#d4493f', boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414', marginLeft: '5px', marginRight: '15px', borderRadius: '250px', padding: '5px', alignContent: 'center', alignItems: 'center', width: "300px" }} />
                        </Zoom>
                        <LightSpeed>
                            <Typography style={{ marginTop: '80px', color: '#bdbdbd', fontFamily: "monospace", fontSize: "" }} component="h1" variant="h1"
                                align="center" color="textPrimary" gutterBottom>
                                RNXG
                            </Typography>
                        </LightSpeed>

                    </Container>
                </div>
                <Container className={classes.cardGrid}>
                    {/* End hero unit */}
                    <Zoom>
                        <Grid style={{ backgroundColor: '#302c2c' }} container spacing={4}>
                            <Grid style={{
                                boxShadow: '-9px -9px 15px #636262 , 9px 9px 45px #171717',

                                marginLeft: '30px', marginRight: '30px', marginTop: '15px', marginBottom: '15px', borderRadius: "25px"
                            }} item xs={12} sm={60} md={12}>
                                <Zoom>
                                    <Card component="a" href="https://www.instagram.com/tv/CLlS5pJlwRe/?igshid=184lr7a6acx2b" style={{ backgroundColor: '#302c2c', textDecoration: "none" }} className={classes.card}>

                                        <CardContent className={classes.cardContent}>
                                            <Typography style={{ fontSize: '25px', color: '#bdbdbd' }}>
                                                <NewReleasesIcon style={{ fontSize: '30px', color: '#d4493f', boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414', marginLeft: '5px', marginRight: '15px', borderRadius: '25px', padding: '5px', alignContent: 'center', alignItems: 'center' }} />
                                                    Announcement
                                                    </Typography>
                                            <Typography style={{ color: '#bdbdbd' }}>
                                                Video  is out!!!!<br></br>
                                            Click here!!!
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                </Zoom>
                            </Grid>
                            <Grid style={{
                                boxShadow: '-9px -9px 15px #636262 , 9px 9px 45px #171717',

                                marginLeft: '30px', marginRight: '30px', marginTop: '15px', marginBottom: '15px', borderRadius: "25px"
                            }} item xs={12} sm={60} md={12}>
                                <Zoom>
                                    <Card style={{ backgroundColor: '#302c2c' }} className={classes.card}>

                                        <CardContent className={classes.cardContent}>
                                            <Typography style={{ fontSize: '25px', color: '#bdbdbd' }}>
                                                <NewReleasesIcon style={{ fontSize: '30px', color: '#d4493f', boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414', marginLeft: '5px', marginRight: '15px', borderRadius: '25px', padding: '5px', alignContent: 'center', alignItems: 'center' }} />
                                                Announcement

                                            </Typography>
                                            <Typography style={{ color: '#bdbdbd' }}>
                                                Open House Meet COOMING SOOOOOOON!!!!
                                                We Are Excited, What About You?!
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                </Zoom>
                            </Grid>
                        </Grid>
                    </Zoom>
                </Container>
                <div style={{ backgroundColor: '#302c2c' }} className={classes.heroContent}>
                    <Container style={{ backgroundColor: '#302c2c' }} >

                        <Fade right>
                            <Typography style={{ color: '#bdbdbd' }} component="h1" variant="h2" align="center"
                                color="textPrimary" gutterBottom>
                                About RNXG
                            </Typography>
                        </Fade>
                        <Fade left>
                            <Typography style={{ color: '#bdbdbd', fontFamily: "monospace" }} variant="h5" align="center" color="textSecondary"
                                paragraph>
                                RNXG’s mission is to increase enthusiasm and knowledge towards
                                robotics by providing a hands on and multidisciplinary collaboration
                                experience in designing, programming. We always try to familiarize with
                                new technology. For this we always participate in competitions and work
                                on many problem statements and try to find best solution on them. We
                                also help the students from all branches and years in their projects. We
                                organize events and workshops to induce technical enthusiasm amongst
                                the student’s. RNXG includes members irrespective of disciplines which
                                work together as a team for developing multi-disciplinary technical
                                knowledge.
                            </Typography>
                        </Fade>
                        <Fade right>{/*hi*/}
                            <Typography style={{ color: '#bdbdbd', marginTop: "50px" }} component="h1" variant="h2" align="center"
                                color="textPrimary" gutterBottom>
                                Why RNXG?!
                            </Typography>
                        </Fade>
                        <Fade left>
                            <Typography style={{ color: '#bdbdbd', fontFamily: "monospace" }} variant="h5" align="center" color="textSecondary"
                                paragraph>
                                <ul>
                                    <li>Engineers apply the principles of science and technology to
                                    develop technical solutions to real world problems.</li>
                                    <li>So, RNXG that is Robotics for Next Generation is the best
                                    platform to work on different problem statements and
                                    creating best solutions to it.</li>
                                    <li>Today’s world is of Artificial Intelligence, ML, DL, embedded
                                    systems, IoT (Internet of Things), VLSI, Robotics, etc. To learn
                                    explore and innovate new things, lets explore all these
                                    technologies with team RNXG.</li>
                                </ul>
                            </Typography>
                        </Fade>

                    </Container>
                </div>

            </main>
        </React.Fragment>
    );
}