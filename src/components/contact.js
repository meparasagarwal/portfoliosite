import React,{Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
class Contact extends Component{
	render(){
		return(
		<div className="contact-body">
		 <Grid className='contact-grid'>
		 	<Cell col={6}>
             <h2>Paras Agarwal</h2>
             <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height:"250px"}}
             />
             <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>I am a web developer who aims at producing its best through hardwork and commitment.I am passionate about my work and loves to deal with new challenges. Provide me the difficulties and I will pave my way throuogh them towards success.</p>
		 	</Cell>
		 	<Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>
          <div className='contact-list'>
            <List>
			  <ListItem>
			    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                 <i className='fa fa-phone-square' aria-hidden='true'/>
                 +91-7895200664 
			    </ListItemContent>
			  </ListItem>


			  <ListItem>
			    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                 <i className='fa fa-envelope' aria-hidden='true'/>
                 parastiger12@gmail.com
			    </ListItemContent>
			  </ListItem>


			  <ListItem>
			    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                 <i className='fa fa-instagram' aria-hidden='true'/>
                 paras_agarwal_12
			    </ListItemContent>
			  </ListItem>


			</List>
           </div>
		 	</Cell>
		 </Grid>
		</div>
		);
	}
}

export default Contact;