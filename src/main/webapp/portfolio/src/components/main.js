import React from 'react';
import Landingpage from "./landingpage";
import Resume from "./resume";
import Project from "./project";
import Contact from "./contact";
import Aboutme from "./aboutme";
import pdf from './madanjeet_final_cv.pdf';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
const Main = () =>(
    <Switch>
        <Route path="/" exact component={Landingpage}/>
        <Route path="/resume" exact component={Resume}/>
        <Route path="/project" exact component={Project}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/aboutme" exact component={Aboutme}/>

    </Switch>

)
export default Main;