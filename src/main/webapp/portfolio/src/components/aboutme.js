import React , { Component } from 'react';
import {Grid, Cell, ListItemContent} from "react-mdl";
import logo from "./circle-cropped.png";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
class Aboutme extends Component
{
    render()
    {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={logo}
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '0.5em'}}>Madanjeet Kumar</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p> Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Krishna Reddy Industrial Estate, Dooravani Nagar, Bengaluru, Karnataka 560016</p>
                        <h5>Phone</h5>
                        <p>(+91) 7619291034</p>
                        <h5>Email</h5>
                        <p>kumarmadanjeet1997@gmail.com</p>
                        {/*<h5>Web</h5>*/}
                        {/*<p>mywebsite.com</p>*/}
                        {/*<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>*/}
                    </Cell>
                    <Cell  col={8} >
                        <h2>About me</h2>
                        <h6 align="justify" style={{paddingRight: '2em',paddingLeft: '2em'}}>Hello, I’m  Madanjeet Kumar. I’m a Software  developer in OYO ROOMS living in Bangalore, India. I am a fan of music, travel, and innovation.
                            So who am I really? My all time favourite question.

                            I believe life is too short to be serious all the time, so if you cannot laugh at yourself... call me.. I'll do it for you :p.

                            I passionately learn new things until I master them. Very light hearted and sportive person.

                            I love rain but from the inside of the house and a glass window to have a view of it and a cup of hot coffee in my hands.

                            I love speed.. not racing.

                            I love fantasy.. I always dream about the powers and out of the world things that would help me make a situation easy.

                            I have been doing my Btech in Computer Science  from Thapar Institute of Engineering and Technology.</h6>
                        <h6 align="justify" style={{paddingRight: '2em',paddingLeft: '2em'}}>
                            I love giving more than my best. I love learning new things and getting good at them.I am a technical person.As a technical person, I spend time understanding why something works. Once I know why it works, I can understand how it works. Once I know how it works, I no longer need training in how to use it.That's all about me.</h6>


                    </Cell>
                </Grid>
            </div>
        )

    }
}
export default  Aboutme;