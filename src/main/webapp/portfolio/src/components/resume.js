import React , { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import logo from '../components/circle-cropped.png';
class Resume extends Component
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

                        <h2 style={{paddingTop: '2em'}}>Madanjeet Kumar</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p> Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Krishna Reddy Industrial Estate, Dooravani Nagar, Bengaluru, Karnataka 560016</p>
                        <h5>Phone</h5>
                        <p>(+91) 7903184903</p>
                        <h5>Email</h5>
                        <p>kumarmadanjeet1997@gmail.com</p>
                        {/*<h5>Web</h5>*/}
                        {/*<p>mywebsite.com</p>*/}
                        {/*<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>*/}
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2012}
                            endYear={2013}
                            schoolName="St. Xavier's Jr./Sr. School"
                            schoolDescription="I got 10 cgpa in 10th Class."
                        />

                        <Education
                            startYear={2013}
                            endYear={2015}
                            schoolName="Doon Sr. Secondary School"
                            schoolDescription="I got 89.2% marks in 12th Class."
                            />
                        <Education
                            startYear={2016}
                            endYear={2020}
                            schoolName="Thapar Institute of Engineering and Technology"
                            schoolDescription="I got  8.7 cgpa marks in graduation."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2020}
                            endYear={2020}
                            jobName="First Job"
                            jobDescription="Software Developer in OYO ROOMS"
                            />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={80}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="Spring Boot"
                            progress={70}
                        />
                        <Skills
                            skill="React"
                            progress={70}
                        />
                        <Skills
                            skill="Php"
                            progress={70}
                        />
                        <Skills
                            skill="Laravel"
                            progress={70}
                        />
                        <Skills
                            skill="Java"
                            progress={80}
                        />


                    </Cell>
                </Grid>
            </div>
        )

    }
}
export default  Resume;