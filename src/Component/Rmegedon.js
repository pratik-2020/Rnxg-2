import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import StarsIcon from '@material-ui/icons/Stars';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import PersistentDrawerLeft from './Drawer';
import FooterComponent from './FooterComponent';
import { Zoom } from 'react-reveal';
import { CardImg } from 'reactstrap';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
 </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));
const tiers = [
    {
    title: 'END GAME',
    subheader: 'Obstacle Race',
    price: 'Pool Prize of 10k',
    description: [
    'TEAM  VIKINGS',
    'TEAM  DYNAMIC BOT',
    'TEAM  WIRED',
    ],
    buttonVariant: 'outlined',
    },
    {
    title: 'CIVIL WARS',
    subheader: 'Robo Soccer',
    price: 'Pool Prize of 10k',
    description: [
    'TEAM VIKINGS',
    'TEAM TRIGGERS',
    ],
    buttonVariant: 'contained',
    },
    {
    title: 'FAST N FOLLOWER',
    subheader: 'Line Follower',
    price: 'Pool Prize of 10k',
    description: [
    'TEAM FAR FROM HOME',
    'TEAM BELIVE',
    ],
    buttonVariant: 'outlined',
    },
   ];
export default function Pricing() {
    const classes = useStyles();
    return (
        <React.Fragment >
            <CssBaseline />
            <PersistentDrawerLeft />
            <main style={{ backgroundColor: '#302c2c' }}>
                <Zoom>
                    <Container style={{ backgroundColor: '#302c2c', color: '#dedcd7' }} maxWidth="sm"
                        component="main" className={classes.heroContent}>
                        <Typography style={{ color: '#dedcd7' }} fontFamily="monospace" variant="h3"
                            align="center" color="textPrimary" gutterBottom>
                            RMAGEDDON
 </Typography>
                        <Typography style={{ color: '#dedcd7', fontSize: '20px' }} variant="h5" align="center"
                            color="textSecondary" component="p">
                            Rmageddon is a intra college robotics event organised by first year team. Here we organise workshops and conduct
                            various compititions.
 </Typography>
                    </Container>
                </Zoom>
                {/* Hero unit */}
                <Zoom>
                    <Container style={{ backgroundColor: '#302c2c', color: '#dedcd7' }} maxWidth="sm"
                        component="main" className={classes.heroContent}>
                        <Typography style={{ color: '#dedcd7', fontSize: '30px' }} fontFamily="monospace" component="h1" variant="h1"
                            align="center" color="textPrimary" gutterBottom>
                            RMAGEDDON 2020
 </Typography>
                        <Typography style={{ color: '#dedcd7', fontSize: '20px' }} variant="h5" align="center"
                            color="textSecondary" component="p">
                            Lets have a look on RMAGEDDON 2020.
 <br></br>
 Here we organised three events namely Endgame, Civil War, Fast N Follower & conducted various technical workshops and over 40 teams participated in
 these events. Total prize money was <strong style={{ fontSize: "40px" }}><b>30k</b></strong>
                        </Typography>
                    </Container>
                </Zoom>
                {/* End hero unit */}

                <Container style={{ backgroundColor: '#302c2c' }} maxWidth="md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {tiers.map((tier) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid style={{ backgroundColor: '#302c2c', color: '#dedcd7' }} item key={tier.title} xs={12}
                                sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                                <Zoom>
                                    <Card style={{
                                        backgroundColor: '#302c2c', color: '#dedcd7', boxShadow: '-9px -9px 15px #636262 , 9px 9px 45px #171717', marginLeft: '40px', marginRight: '40px', marginTop: '25px', marginBottom: '25px', borderRadius: "25px"
                                    }}>
                                        <CardHeader style={{ backgroundColor: '#302c2c', color: 'white' }}
                                            title={tier.title}
                                            subheader={tier.subheader}
                                            titleTypographyProps={{ align: 'center' }}
                                            subheaderTypographyProps={{ align: 'center' }}
                                            className={classes.cardHeader}
                                        />
                                        <CardContent >
                                            <div className={classes.cardPricing}>
                                                <Typography style={{ fontSize: '20px', color: '#dedcd7' }} fontFamily="monospace" component="h2" variant="h3"
                                                    color="textPrimary">
                                                    {tier.price}
                                                </Typography>
                                            </div>
                                            <ul>
                                                {tier.description.map((line) => (
                                                    <Typography style={{ marginBottom: '10px', fontSize: '20px' }} fontFamily="monospace" component="li"
                                                        variant="subtitle1" align="left" key={line}>
                                                        <StarsIcon style={{
                                                            fontSize: '30px', color: '#d0e03d', boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414', marginLeft: '5px'
                                                            , borderRadius: '20px', padding: '1px'
                                                        }} /> {line}
                                                    </Typography>
                                                ))}
                                            </ul>
                                        </CardContent>

                                    </Card>
                                </Zoom>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* End hero unit */}
                <Zoom>
                </Zoom>
            </main>
        </React.Fragment>
    );
}