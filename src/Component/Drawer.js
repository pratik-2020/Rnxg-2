import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import SchoolIcon from '@material-ui/icons/School';
import PeopleIcon from '@material-ui/icons/People';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import "./CSS/Drawer.css"
import { Container } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#302c2c",
    },
    appBar: {
        backgroundColor: "#302c2c",
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: "#302c2c",
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
        backgroundColor: "#302c2c",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: "#302c2c",
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#302c2c",
    },
    drawerHeader: {
        display: 'flex',
        backgroundColor: "#302c2c",
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        backgroundColor: "#302c2c",
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        backgroundColor: "#302c2c",
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));
export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar style={{ backgroundColor: "#302c2c", boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414' }}>
                    <IconButton style={{ color: 'white', boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414', padding: '5px', marginLeft: '5px' }}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{alignItems:"center"}} fontFamily="monospace" variant="h5" noWrap>
                        RNXG
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton style={{ color: 'white', boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414', padding: '5px', marginRight: '15px' }} onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List style={{ color: 'white', borderRadius: "25px", padding: '25px' }}>
                    <ListItem className="button1" style={{
                        color: 'white', borderRadius: "30px", boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414', marginBottom: "25px"
                        , marginTop: "25px", padding: '10px'
                    }} button key='Home' component="a" href="/home">
                        <ListItemIcon style={{ color: 'white' }}><HomeIcon /></ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem className="button1" style={{
                        color: 'white', borderRadius: "30px", boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414', marginBottom: "25px"
                        , marginTop: "25px", padding: '10px'
                    }} button key='Projects' component="a" href="/projects">
                        <ListItemIcon style={{ color: 'white' }}><CastForEducationIcon /></ListItemIcon>
                        <ListItemText primary='Projects' />
                    </ListItem>
                    <ListItem className="button1" style={{
                        color: 'white', borderRadius: "30px", boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414', marginBottom: "25px"
                        , marginTop: "25px", padding: '10px'
                    }} button key='Our Team' component="a" href="/our-teams">
                        <ListItemIcon style={{ color: 'white' }}><PeopleIcon /></ListItemIcon>
                        <ListItemText primary='Our Team' />
                    </ListItem>
                    <ListItem className="button1" style={{
                        color: 'white', borderRadius: "30px", boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414', marginBottom: "25px"
                        , marginTop: "25px", padding: '10px'
                    }} button key='Rmageddon' component="a" href="/rmegeddon">
                        <ListItemIcon style={{ color: 'white' }}><EmojiEventsIcon /></ListItemIcon>
                        <ListItemText primary='Rmageddon' />
                    </ListItem>
                </List>
                <Divider style={{ color: "white", backgroundColor: '#787878', marginBottom:'20px' }} />
                <Container>
                <a href="https://in.linkedin.com/company/rnxg"><LinkedInIcon style={{fontSize:'40px',color:'#2c618f',boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414',marginLeft:'5px'
                    ,borderRadius:'25px' ,padding:'5px'}} /></a>
                    <a href="https://www.instagram.com/sggs_rnxg/"><InstagramIcon style={{fontSize:'40px',color:'#e86fcc',boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414'
                    ,marginLeft:'25px',borderRadius:'25px' ,padding:'5px'}}/></a>
                    <a href="https://www.facebook.com/rnxgsggs/"><FacebookIcon style={{fontSize:'40px',color:'#3b5998',boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414'
                    ,marginLeft:'25px',borderRadius:'25px' ,padding:'5px'}}/></a>
                </Container>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div>
    );
}