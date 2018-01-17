  import React from 'react';

class WorkBox extends React.Component{
  constructor(props){
   super(props);
   this.state={
     checkEdit: 'false',
     updatedWork: ''
   }
   this.updateText = this.updateText.bind(this);
   this.handleDelete = this.handleDelete.bind(this)
   this.changeText = this.changeText.bind(this);
   this.handleEdit = this.handleEdit.bind(this);
  }
 handleEdit(){
    this.props.onsubmit(this.props.index, this.state.updatedWork);
    this.setState({
      checkEdit: 'false'
    })
 }

 updateText(e){
   this.setState({
     updatedWork: e.target.value
   });
 }

 handleDelete(){
    this.props.onDelete(this.props.index, this.props.workItem);
 }

 changeText(){
   if(this.state.checkEdit=="false")
   {
     this.setState({
        checkEdit : 'true'
    });
   }
   else {
     this.setState ({
       checkEdit: 'false'
     });
   }
 }

render(props){
        return <li key= {this.props.index} >
           <input id="workText" value={this.props.workItem} disabled="true" />
           <button type="reset" id="edit" onClick={this.changeText.bind(this)}>EDIT</button>
           <button type="reset" id="delete" onClick={this.handleDelete.bind(this)}>DELETE</button>
           {
            this.state.checkEdit=='true'?
            <div>
            <input type="text" id="editText" value={this.state.value} onChange={this.updateText.bind()}/>
            <button type="submit" id="editWork" value={this.state.value} onClick={this.handleEdit.bind(this)}>Change</button>
            </div>
            :<p></p>
           }
        </li>
    }
}
export default WorkBox;
