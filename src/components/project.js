import React,{Component} from 'react';
import {Tabs,Tab,Grid,CardTitle,Card,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';
class Project extends Component{
    constructor(props){
      super(props);
      this.state={activeTab:0}
    }
    toggleCategories(){
    	if(this.state.activeTab === 0) {
    		return(

    		<div className="projects-grid">
               <Card shadow={5} style={{minWidth:'450',margin:'5%',display:'flex'}}>
                 <CardTitle style={{color: '#fff',height:'176px',background:'url("https://cdn-images-1.medium.com/max/1600/1*K-4RqDC6zFrpAG31ayDDOg.png") center / cover'}}>React Project #1</CardTitle>
                 <CardText>
                   This project uses face recognition API to recognise the face in an image.It also enable us to register and SignIn
                 </CardText>
                 <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored><a href='https://facerecognitionbrainbyparas.herokuapp.com'>Live Demo</a></Button>
                 </CardActions>
                 <CardMenu style={{color:'#fff'}}>
                     <IconButton name="share" />
                 </CardMenu>
               </Card>
              <Card shadow={5} style={{minWidth:'450',margin:'5%',display:'flex'}}>
                 <CardTitle style={{color: '#fff',height:'176px',background:'url("https://cdn-images-1.medium.com/max/1600/1*K-4RqDC6zFrpAG31ayDDOg.png") center / cover'}}>React Project #1</CardTitle>
                 <CardText>
                   This project uses dynamic card installation method to implement the  cards.
                 </CardText>
                 <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Live Demo</Button>
                 </CardActions>
                 <CardMenu style={{color:'#fff'}}>
                     <IconButton name="share" />
                 </CardMenu>
               </Card>
               <Card shadow={5} style={{minWidth:'450',margin:'5%',display:'flex'}}>
                 <CardTitle style={{color: '#fff',height:'176px',background:'url("https://cdn-images-1.medium.com/max/1600/1*K-4RqDC6zFrpAG31ayDDOg.png") center / cover'}}>React Project #1</CardTitle>
                 <CardText>
                   This project is under construction
                 </CardText>
                 <CardActions border>
                      <Button colored>Github</Button>
                      <Button colored>Live Demo</Button>
                 </CardActions>
                 <CardMenu style={{color:'#fff'}}>
                     <IconButton name="share" />
                 </CardMenu>
               </Card>
            </div>
    			);
    	}
    	else if(this.state.activeTab === 1) {
    		return(
               <div><h1>This is Angular </h1></div>
    			);
    	}
    	else if(this.state.activeTab === 2) {
    		return(
               <div><h1>This is VueJS </h1></div>
    			);
    	}
    	else if(this.state.activeTab === 3) {
    		return(
               <div><h1>This is PostgerSQL </h1></div>
    			);
    	}
    }
	render(){
		return(
		 <div className="category-tabs">
           <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>{this.setState({activeTab:tabId})}} ripple>
           <Tab>React</Tab>
           <Tab>Angular</Tab>
           <Tab>VueJS</Tab>
           <Tab>PostgerSQL</Tab>
           </Tabs>
           <section className="projects-grid">
           <Grid>
            <div className="content">{this.toggleCategories()}</div>
           </Grid>
           </section>
          </div>
		);
	}
}

export default Project;