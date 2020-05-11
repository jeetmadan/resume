import React , { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from '../components/circle-cropped.png';
class Landingpage extends Component
{
    render()
    {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={logo}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML | CSS | Bootstrap | JavaScript | React | Spring Boot | Php | Vue.js | Laravel</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/madanjeet-kumar/" target="_blank" rel="noopener">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/jeetmadan" target="_blank" rel="noopener">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Facebook */}
                                {/*<a href="https://www.facebook.com/madanjeet.kumar.7" rel="noopener noreferrer" target="_blank">*/}
                                {/*    <i className="fa fa-facebook-square" aria-hidden="true" />*/}
                                {/*</a>*/}

                                {/*/!* instagram *!/*/}
                                {/*<a href="https://www.instagram.com/k.madanjeet/" target="_blank" rel="noopener">*/}
                                {/*    <i className="fa  fa-instagram" aria-hidden="true" />*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )

    }
}
export default  Landingpage;