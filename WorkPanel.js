import React from 'react';
import WorkBox from './WorkBox';


class WorkPanel extends React.Component {
   constructor(props){
		super(props);
		  this.state={
			workList: [],
			work: '',
			anotherWork:''
		};
		this.submitHandle = this.submitHandle.bind(this);
		this.changeInput = this.changeInput.bind(this);
	}

	changeInput(e){
		this.setState({
			work:e.target.value
		})
	}

	submitHandle(event){
		event.preventDefault();
		if(this.state.work!="")
		{
			var wkey = this.state.workList.push(this.state.work);
		  this.setState({
		  workList: this.state.workList,
	  	anotherWork:this.state.work,
      });
	  }
	}

  deleteHandler(key,workItem){
     var newItems = this.state.workList.filter((work, index)=>{
       return index!=key
     });
     this.setState({
       workList: newItems
     });
 }

  editHandler(key,workItem) {
		 var wl = this.state.workList;
		 wl[key]=workItem;
		 this.setState({
		 workList: wl
		 })
	}

	render(){
		return(
		<div>
			<div>
			   <form onSubmit={this.submitHandle.bind(this)}>
				 <input type="text" value={this.state.value} name="todoWork" id="tdWork" onChange={this.changeInput.bind(this)}/>
				 <button type="submit" id="save">Submit</button>
			   </form>
			</div>
			<div>
        <ul>
          {this.state.workList[0]!=null ?
            this.state.workList.map((workItem,index) => {
              return <WorkBox name={this.state.workList} index={index} workItem={workItem} onsubmit={this.editHandler.bind(this)} onDelete={this.deleteHandler.bind(this)}/>
          })
           : <p></p>}
        </ul>
			</div>
		</div>
		);
	}
}


export default WorkPanel;
