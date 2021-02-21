import React, { useState } from 'react';
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
import ModalComponent from '../ModalComponent';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Proj from './Project'
import { List, ListItem } from '@material-ui/core';
import PersistentDrawerLeft from '../Drawer';
import FooterComponent from '../FooterComponent';
import {  Zoom } from 'react-reveal';
import Project from '../assets/Photos/Project.jpg';
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
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
    flexDirection: 'column',
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
  paper: {
    marginTop:500,
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function Album2() {
  const classes = useStyles();
  const[open, setOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const[descreption, setDescreption] = useState('');
    const[name, setName] = useState('');
    const[team, setTeam] = useState('');
    const[img, setImg] = useState('');
  return (
    <React.Fragment>
        <Modal isOpen={modal} toggle={toggle} style={{marginTop:"100px"}}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody style={{fontFamily:"monospace"}}>
          {descreption}
        </ModalBody>
        <ModalFooter style={{justifyContent:"left", fontFamily:"monospace"}}>
          <p>Team Members : </p>
          {team}
        </ModalFooter>
        </Modal>
      <CssBaseline />
      <PersistentDrawerLeft />
      <main style={{backgroundColor:'#302c2c'}}>
        {/* Hero unit */}
        <div className={classes.heroContent}  style={{backgroundColor:'#302c2c', color:'white'}}>
          <Zoom>
          <Container maxWidth="sm" style={{backgroundColor:'#302c2c'}}>
            <Typography component="h1" variant="h1" fontFamily="monospace" align="center" color='white' gutterBottom>
              Project
            </Typography>
          </Container>
          </Zoom>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              {Proj.map(card => {
                  return(
                    <Grid item key={card} xs={8} sm={6} md={4} style={{boxShadow: '-9px -9px 15px #636262 , 9px 9px 45px #171717',

                    marginLeft:'70px',marginRight:'60px',marginTop:'25px',marginBottom:'25px',borderRadius:"25px"
                    }}>
                      <Card className={classes.card} style={{backgroundColor:'#302c2c', color:'whitesmoke'}} onClick={() => {
                        toggle()
                        setTeam(card.team)
                        setDescreption(card.description)
                        setName(card.name)
                      }}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={Project}
                          title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" fontFamily="monospace" component="h2">
                            {card.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
              })}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}