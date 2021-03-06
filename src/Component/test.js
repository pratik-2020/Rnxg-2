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
import { Zoom } from 'react-reveal';
import { Button } from 'reactstrap';
        const drawerWidth = 240;
        const useStyles = makeStyles((theme) => ({
        root: {
        display: 'flex',
        backgroundColor: "#4a4945",
        },
        appBar: {
        backgroundColor: "#4a4945",
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        },
        appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: "#4a4945",
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
    backgroundColor: "#4a4945",
    },
    drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "#4a4945",
    },
    drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#4a4945",
    },
    drawerHeader: {
    display: 'flex',
    backgroundColor: "#4a4945",
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    },
    content: {
    flexGrow: 1,
    backgroundColor: "#4a4945",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    },
    contentShift: {
    backgroundColor: "#4a4945",
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
 [classes.appBarShift]: open,})}>
 <Toolbar style={{backgroundColor: "#4a4945",boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414'}}>
 <IconButton style={{color:'white' ,boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414',padding:'5px',marginLeft:'5px' }}
 color="inherit"
 aria-label="open drawer"
 onClick={handleDrawerOpen}
 edge="start"
 className={clsx(classes.menuButton, open && classes.hide)}
 >
 <MenuIcon />
 </IconButton>
 <Typography style={{marginLeft:'5px'} } variant="h6" noWrap>
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
 <IconButton style={{color:'white' ,boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414',padding:'5px',marginRight:'15px' }} onClick={handleDrawerClose}>
 {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
 </IconButton>
 </div>
 <Divider />
 <Zoom>
 <List style={{color:'white' , borderRadius:"25px" ,padding: '25px'}}>
 <ListItem style={{color:'white' , borderRadius:"30px",boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414' , marginBottom:"25px",marginTop:"25px"}} button key="Home" component="a" href="/rmegeddon">
     
 </ListItem>
 </List>
 </Zoom>
 <Divider />

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
{
    /*
    <ListItem>
     <Button href="/home" style={{color:'white' , borderRadius:"30px",boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414' , marginBottom:"25px",marginTop:"25px"}}>
         <ListItemIcon><HomeIcon/> Home</ListItemIcon>
     </Button>
     </ListItem>
     <ListItem>
     <Button href="/projects" style={{color:'white' , borderRadius:"30px",boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414' , marginBottom:"25px",marginTop:"25px"}}>
         <ListItemIcon><CastForEducationIcon/> Projects</ListItemIcon>
     </Button>
     </ListItem>
     <ListItem>
     <Button href="/alumni" style={{color:'white' , borderRadius:"30px",boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414' , marginBottom:"25px",marginTop:"25px"}}>
         <ListItemIcon><SchoolIcon/>Alumni</ListItemIcon>
     </Button>
     </ListItem>
     <ListItem>
     <Button href="/our-teams" style={{color:'white' , borderRadius:"30px",boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414' , marginBottom:"25px",marginTop:"25px"}}>
         <ListItemIcon><PeopleIcon/>Our Teams</ListItemIcon>
     </Button>
     </ListItem>
     <ListItem>
     <Button href="/rmegeddon" style={{color:'white' , borderRadius:"30px",boxShadow: '-3px -3px 5px #87857c , 3px 3px 15px #141414' , marginBottom:"25px",marginTop:"25px"}}>
         <ListItemIcon><EmojiEventsIcon /> Rmegeddon</ListItemIcon>
     </Button>
     </ListItem>
    */
}