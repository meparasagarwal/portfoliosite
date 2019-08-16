import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education.js'
import Experience from './experience.js';
import Skills from './skills.js';
class Resume extends Component{
	render(){
		return(
		<div>
		  <Grid>
		     <Cell col={4}>
               <div style={{textAlign:'center'}}>
                 <img
                   src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                   alt='avatar'
                   style={{height:'200px'}}
                   />  
               </div>

                <h2 style={{paddingTop:'2em'}}>Paras Agarwal</h2>
                <h4 style={{color:'grey'}}>Programmer</h4>
                <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                <p>
                  I am a web developer who aims at producing its best through hardwork and commitment.I am passionate about my work and loves to deal with new challenges. Provide me the difficulties and I will pave my way throuogh them towards success.
                </p>
                <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                <h5>Address</h5>
                <p>1. IIIT BHUBANESWAR,BOYS HOSTEL</p>
                <h5>Phone</h5>
                <p> +91-7895200664 </p>
                <h5>E-mail</h5>
                <p>parastiger12@gmail.com</p>
                <h5>Web</h5>
                <p>https://facerecognitionbrainbyparas.herokuapp.com</p>
                <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
		     </Cell>
		     <Cell className='resume-right-col' col={8}>
               <h2>Education</h2>
  
               <Education startYear={2012} endYear={2015} schoolName="KCM School" schoolDescription='This  school is situated in moradabad,Uttar Pradesh and is well known for providing quality education since 1960.' 
               />
               <hr style={{borderTop:'3px solid #e22947'}}/>
               <h2>Experience</h2>
               <Experience startYear={2018}
                 endYear={2019}
                 jobName='First Job'
                 jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
               />
                <Experience startYear={2018}
                 endYear={2019}
                 jobName='Second Job'
                 jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
               />    
               <hr style={{borderTop:'3px solid #e22947'}}/>
               <h2>Skills</h2>     
                <Skills skill='ReactJs' progress={50}/>
                 <Skills skill='NodeJs' progress={35}/>
                 <Skills skill='Javascript' progress={79}/>
                 <Skills skill='CSS' progress={80}/>
                 <Skills skill='HTML' progress={95}/>          
		     </Cell>
		  </Grid>
		</div>
		);
	}
}

export default Resume;