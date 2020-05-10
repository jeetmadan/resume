import React from 'react';
import Landingpage from "./landingpage";
import Resume from "./resume";
import Project from "./project";
import Contact from "./contact";
import Aboutme from "./aboutme";

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// function Main() {
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/" exact component={Landingpage}/>
//                 <Route path="/resume" exact component={Resume}/>
//                 <Route path="/project" exact component={Project}/>
//                 <Route path="/contact" exact component={Contact}/>
//                 <Route path="/aboutme" exact component={Aboutme}/>
//
//             </Switch>
//         </Router>
//     );
// }
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