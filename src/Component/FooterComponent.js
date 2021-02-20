import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Footer from './Common/Footer';
import '../Component/CSS/FooterComponent.css';
import { Zoom } from 'react-reveal';
function FooterComponent() {
    return (
        <div>
            <Jumbotron style={{display:"flex", backgroundColor:"#4a4945", width:"80%", objectFit:"contain"}}>
                <Zoom>
                <Button id="button" className="fa fa-facebook" href="https://www.facebook.com"></Button>
                <Button id="button1" className="fa fa-github" href="https://www.facebook.com"></Button>
                <Button id="button2" className="fa fa-google" href="https://www.facebook.com"></Button>
                <Button id="button3" className="fa fa-instagram" href="https://www.facebook.com"></Button>
                </Zoom>
            </Jumbotron>
        </div>
    )
}
//#4a4945
//box shadow #87857c
//#141414
export default FooterComponent
//#2984