import React , { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import logo from '../components/circle-cropped.png';
import Iframe from 'react-iframe'
import pdf from './madanjeet_final_cv.pdf'
import PDFViewer from 'pdf-viewer-reactjs'
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

                        <h2 style={{paddingTop: '0.5em'}}>Madanjeet Kumar</h2>
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
                    </Cell>
                    <Cell>
                        <div>
                        <Iframe url="https://drive.google.com/file/d/1AtQX3xqco0sIKQiiw0bjCtO8rlM18JOY/preview" width="800px" height="900px" display="initial" position="relative"/>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )

    }
}
export default  Resume;