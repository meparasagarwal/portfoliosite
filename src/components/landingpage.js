import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class LandingPage extends Component{
	render(){
		return(
		<div>
		<Grid className="Landing-Grid">
         <Cell col={12}>
           <img 
             src='https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160912741/62358463-avatar-man-smiling-cartoon-with-beard-male-person-user-vector-illustration.jpg'
             alt='avatar'
             className='avatar-img'
           />
          <div className='banner-text'>
           <h1>Full Stack Web Developer</h1>
           <hr/>
           <p>HTML| CSS | Bootstrap | JavaScript | React | NodeJs | ExpressJs | PostgreSQL</p>
           <div className='social-links'>
           {/* Linked In */}
            <a href="https://www.linkedin.com/in/paras-agarwal-3a6416181/" target='_blank' rel='noopener noreferrer'>
               <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            {/* Github */}
            <a href="https://github.com/B418030" target='_blank' rel='noopener noreferrer'>
               <i class="fa fa-github-square" aria-hidden="true"></i>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/paras_agarwal_12/?hl=en" target='_blank' rel='noopener noreferrer'>
               <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/paras.agarwal.52459" target='_blank' rel='noopener noreferrer'>
               <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
           </div>
          </div>
         </Cell>
		</Grid>
		</div>
		);
	}
}

export default LandingPage;