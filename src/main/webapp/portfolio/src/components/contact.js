import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import logo from '../components/circle-cropped.png';
class Contact extends Component
{
    render()
    {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Madanjeet Kumar</h2>
                        <img
                            src={logo}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>“You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.” - John Romero</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '26px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (+91) 7619291034
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '26px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        kumarmadanjeet1997@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '18px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        https://www.linkedin.com/in/madanjeet-kumar/
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '26px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        live:.cid.d053589b3edb80e2
                                    </ListItemContent>
                                </ListItem>


                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )

    }
}
export default  Contact;