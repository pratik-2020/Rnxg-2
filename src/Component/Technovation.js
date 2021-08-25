import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersistentDrawerLeft from './Drawer';
import P2 from './assets/Photos/Projects/b2.png';
import {CardImg, CardText, CardTitle, Card, CardBody, Button} from 'reactstrap';
import RNXG from './assets/RNXG.pdf';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import Submissions from './assets/Submissions.pdf';
import technovation from './assets/technovation.png';
function Technovation(){
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return(
        <div>
            <div>
                <PersistentDrawerLeft />
            </div>
            <div className="container">
                <br></br>
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-6 align-self-center">
                        <Card className="shadow-lg p-3 mb-5  rounded">
                            <CardImg src={technovation} />
                            <CardBody>
                                <CardTitle>
                                    <h2 className="mr-center">Technovation</h2>
                                </CardTitle>
                                <CardText>
                                    <p>
                                    <strong>Hello, SGGSians</strong>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    💡 The value of an idea lies in using it 💡
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    As mentioned earlier, <strong>Team RNXG</strong> is here with <strong>TECHNOVATION</strong> 👨‍💻
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    👩‍💻 <strong>TECHNOVATION</strong> is a technical hackathon where you will show your Innovative engineering skills to solve real-life problems.
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    With Prize Pool🏆 of <strong></strong>6k in both Software and Hardware Categories.<br></br>
                                    <strong>Winner🥇: 2k</strong><br></br>
                                    <strong>Runner Up🥈: 1k</strong><br></br>
                                    In each category.
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    🗒️ The problem statements are:
                                    <br></br>
                                    <strong>1. Software: Road & Traffic Safety.</strong><br></br>
                                    <strong>2. Hardware: Skyscraper Cleaning.</strong>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    📌Please check the PROBLEM STATEMENT For a detailed explanation of the Problem Statements.<br></br>
                                    📌Also, check out the SUBMISSION GUIDELINES for all your queries.
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    ✍️ REGISTRATIONS ✍️ <br></br>
                                    - Begins: <strong>25th, August, 10 AM</strong>
                                    <br></br>
                                    - Ends: <strong>27th, August, 3 PM</strong>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    🕹️ REGISTRATION IS COMPULSORY BEFORE YOUR SUBMISSION.
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    🗓️ Round 1: Submission of your idea
                                    <br></br>
                                    - Begins: <strong>25th, August, 10 AM</strong><br></br>
                                    - Ends: <strong>28th, August, 3 PM</strong>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    📌 <strong>Only shortlisted Teams from Round 1 will get a chance to present their idea in Round 2.</strong>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    🗓️ Round 2: Submission of your idea
                                    <strong>- 30th August</strong>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    For more queries<br></br>
                                    Drop a mail at: <a href="mailto:rnxg@sggs.ac.in">rnxg@sggs.ac.in</a><br></br>
                                    Or 📱Contact us: <a href="+917796869395">77968 69395</a>, <a href="+819175649202">9175649202</a> 
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    📌 Participating teams will be awarded certificate📜
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-center">
                    <div className="col-10-col-sm-4">
                        <p style={{color:"white"}}>abcsudbcuisdnbcosadkml;c</p>
                    </div>
                    <div className="col-10 col-sm-4">
                        <Button className="shadow-lg p-3 mb-5  rounded" onClick={() => window.open(RNXG, "_blank")}>Problem Statement</Button>
                    </div>
                    <div className="col-10 col-sm-4">
                        <Button className="shadow-lg p-3 mb-5  rounded" onClick={() => window.open(Submissions, "_blank")}>Submission Guidelines</Button>
                    </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-10-col-sm-4">
                        <p style={{color:"white"}}>abcsudbcuisdnbcosadkml;c</p>
                    </div>
                    <div className="col-10 col-sm-4 align-self-center">
                        <Button className="shadow-sm p-3 mb-5  rounded" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf0BED4mJ3Dfd3zmPBSyY8VD9Q2CvZqFmiDcE7-mwCmV9BPzw/viewform?embedded=true", "_blank")}>Team Registration</Button>
                    </div>
                    <div className="col-10 col-sm-4 align-self-center">
                        <Button className="shadow-sm p-3 mb-5  rounded" onClick={() => window.open("https://forms.gle/EaaEvLxmceLVp75CA", "_blank")}>Idea Submission</Button>
                    </div>
                </div>
                <br></br>
                <br></br>
                {/* <div className="row justify-content-center">
                    <div className="col-10 col-sm-10">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="problem"><h4>Problem Statement</h4></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><h4>Submission Rules</h4></a>
                            </li>
                        </ul>
                        <div className="tab-content">
                        <div role="tabpanel" class="tab-pane fade" id="problem">
                        <Document
                            file="somefile.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                            <br></br>
                            <br></br>
                        </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
export default Technovation;