import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function ModalComponent(props) {
    const classes = useStyles();
    const[open, setOpen] = useState(false)
    const [modalStyle] = React.useState(getModalStyle);
    return (
        <div>
            <Modal
                open={()=> setOpen(props)}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle}  className={classes.paper}>
                    <h2 id="simple-modal-title">Text in a modal</h2>
                    <p id="simple-modal-description">
                        I am a modal
                    </p>
                </div>
            </Modal>
        </div>
    )
}

export default ModalComponent
