import React from 'react';
import LandingPage from './landingpage.js';
import AboutMe from './aboutme.js';
import Contact from './contact.js';
import Project from './project.js';
import Resume from './resume.js';
import {Switch,Route} from 'react-router-dom';
const Main = () =>(
 <Switch>
   <Route exact path = '/' component={LandingPage}/>
   <Route path='/aboutme' component={AboutMe} />
   <Route path='/contact' component={Contact} />
   <Route path='/project' component={Project} />
   <Route path='/resume' component={Resume} />
 </Switch>
)

export default Main;
