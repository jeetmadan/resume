import React , { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component
{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <div className="row">
                <div className="column">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450'}}>
                        <CardTitle style={{color: '#fff', height: '185px', background: 'url(https://drive.google.com/uc?export=view&id=1fcPvkn_XPV358aJZYCC64BUqhV9XFWAz) center / cover'}} ></CardTitle>
                        <CardActions border>
                            {/*<Button colored >GitHub</Button>*/}
                            {/*<Button colored>CodePen</Button>*/}
                            {/*<Button colored>Live Demo</Button>*/}
                            <div style={{paddingRight: '2em',color:'blue'}}>Feb 2020 - Mar 2020</div>
                        </CardActions>
                    </Card>

                </div>

                    <Grid>
                    <Cell col={8}>
                        <p><h6 align="justify" style={{paddingRight: '2em'}}>Project helps in storing list of Todo courses.This System has following properties:</h6></p>
                        <p><h7 align="justify" style={{paddingRight: '2em'}}>i). If you didnot complete any course then you can add that course in TODO list.</h7></p>
                        <p><h7 align="justify" style={{paddingRight: '2em'}}>ii). If you want to update anything about the course then you can update it.</h7></p>
                        <p><h7 align="justify" style={{paddingRight: '2em'}}>iii). As you completed the course , you can remove that course from TODO list.</h7></p>
                        <p><h7 align="justify" style={{paddingRight: '2em'}}>It helps in tracking about the courses means that course is completed by the person or not.If the course has been completed by person then it will be removed from Todo list.</h7></p>
                    </Cell>
                    </Grid>
                    <div className="column">
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450'}}>
                            <CardTitle style={{color: '#fff', height: '185px', background: 'url(https://drive.google.com/uc?export=view&id=1d6HRacI0v0a63qP_XoBeo041RT8rsPzu) center / cover'}} ></CardTitle>
                            <CardActions border>
                            <div style={{paddingRight: '2em',color:'blue'}}>OYO ROOMS | Mar 2020 - Present</div>
                            </CardActions>
                        </Card>

                    </div>
                    <Grid>
                        <Cell col={8}>
                            <p><h6 align="justify" style={{paddingRight: '2em'}}>Migrating the following services of Traum-Ferienwohnungen’s Online Advertisement website:</h6></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>i).Migrating the Invoice and Payment section of Traum-Ferienwohnungen’s Online Advertisement module from PHP to JAVA.</h7></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>ii). Converting the pipeline of Traum-Ferienwohnungen’s "online marketplace, holiday rental and vacationers", from monolith to microlith, to ensure the proper functionality
                                of the platform and increasing the robustness.</h7></p>
                        </Cell>
                    </Grid>
                </div>




            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="row">
                    <div className="column">
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450'}}>
                            <CardTitle style={{color: '#fff', height: '185px', background: 'url(https://drive.google.com/uc?export=view&id=15seyuDno63LH6kVFyS3pH8NEarwF3GAk) center / cover'}} ></CardTitle>
                            <CardActions border>
                                {/*<Button colored >GitHub</Button>*/}
                                {/*<Button colored>CodePen</Button>*/}
                                {/*<Button colored>Live Demo</Button>*/}
                                <div style={{paddingRight: '2em',color:'blue'}}>Jan 2020 - Feb 2020</div>
                            </CardActions>
                        </Card>

                    </div>

                    <Grid>
                        <Cell col={8}>
                            <p><h6 align="justify" style={{paddingRight: '2em'}}>The system offers following functionalities:</h6></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>i). Onboarding of a new property for a user.</h7></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>ii). Fetching the list of all properties tagged to a particular user.</h7></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>iii). Fetching and updating the details of a particular
                                property tagged to a particular user.</h7></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>It helps in tracking the properties details which had given by HomeOwner or HomeAgency to OYO ROOMS.</h7></p>
                        </Cell>
                    </Grid>
                    <div className="column">
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450'}}>
                            <CardTitle style={{color: '#fff', height: '185px', background: 'url(https://drive.google.com/uc?export=view&id=1d6HRacI0v0a63qP_XoBeo041RT8rsPzu) center / cover'}} ></CardTitle>
                            <CardActions border>
                                <div style={{paddingRight: '2em',color:'blue'}}>OYO ROOMS | May 2020 - May 2020</div>
                            </CardActions>
                        </Card>

                    </div>
                    <Grid>
                        <Cell col={8}>
                            <p><h6 align="justify" style={{paddingRight: '2em'}}>Added the following Services to Traum-Ferienwohnungen’s Online Advertisement website:</h6></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>i).Registered and opted-in via mail then set to be marked as ‘verified’ and mark as a green tick on the customer's name .Otherwise, set to be marked as 'unverified' and mark as a red cross on the customer's name.</h7></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>ii). All existing paid homeowners or Agency to be marked as ‘verified’ by default. This is because paid homeowners automatically provide their consent via payment.</h7></p>
                        </Cell>
                    </Grid>
                </div>




            )
        } else if(this.state.activeTab === 2) {
            return (
                <div className="row">
                    <div className="column">
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450'}}>
                            <CardTitle style={{color: '#fff', height: '185px', background: 'url(https://drive.google.com/uc?export=view&id=15gTgpHoPx9CFoqC64KDqwuBsTtmrrZxn) center / cover'}} ></CardTitle>
                            <CardActions border>
                                {/*<Button colored >GitHub</Button>*/}
                                {/*<Button colored>CodePen</Button>*/}
                                {/*<Button colored>Live Demo</Button>*/}
                                <div style={{paddingRight: '2em',color:'blue'}}>NOV 2019 - Dec 2019</div>
                            </CardActions>
                        </Card>

                    </div>

                    <Grid>
                        <Cell col={8}>
                            <p><h6 align="justify" style={{paddingRight: '2em'}}>The system offers following functionalities:</h6></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>i). The Attendence is automated using Face Recogination.</h7></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>ii). The picture is clicked during the class.</h7></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>iii). Students whose faces are identified in the picture are marked as present and notified by mail.</h7></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>iv). Timely notifications are sent to their guardian who are absent on a regular basis.</h7></p>
                        </Cell>
                    </Grid>
                </div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div className="row">
                    <div className="column">
                        {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450'}}>
                            <CardTitle style={{color: '#fff', height: '185px', background: 'url(https://drive.google.com/uc?export=view&id=1KNKimdnK09WHmCbuSLPFQWea9SkTvFR9) center / cover'}} ></CardTitle>
                            <CardActions border>
                                {/*<Button colored >GitHub</Button>*/}
                                {/*<Button colored>CodePen</Button>*/}
                                {/*<Button colored>Live Demo</Button>*/}
                                <div style={{paddingRight: '2em',color:'blue'}}>April 2017 - May 2017</div>
                            </CardActions>
                        </Card>

                    </div>

                    <Grid>
                        <Cell col={8}>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>i). Implemented Dictionary Using Trie Data Structure.</h7></p>
                            <p><h7 align="justify" style={{paddingRight: '2em'}}>ii). The aim of the project was to implement all functionalities of a dictionary including insertion, deletion, updation and searching of words..</h7></p>
                            </Cell>
                    </Grid>
                </div>
            )
        }

    }

    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Spring Boot</Tab>
                    <Tab>PHP</Tab>
                    <Tab>Machine Learning</Tab>
                    <Tab>Data Structure</Tab>

                </Tabs>


                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}
export default  Project;