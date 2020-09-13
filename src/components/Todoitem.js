import React, { Component } from 'react';


class Todoitem extends Component {
  getStyle = () =>{
    return {
      background:'#f4f4f4',
      padding:'10px',
      borderBottom:'1px #ccc dotted',
   textDecoration:this.props.Todoitem.completed ?
    'line-through':'none'
      }
    }
/*
markComplete(e){
  console.log(this.props)
  with bind
}*/

/*
markComplete = (e)=>{
console.log(this.props)
}
*/

  render() {
    const { id, title}= this.props.Todoitem;
   return(
     <div style={this.getStyle()}>
      <p>
      <input type="checkbox"  onChange={this.props.markComplete.bind(this,id)}/>{ ' '}
      {title}
      <button onClick={this.props.delTodo.bind(this,id)}style={btnStyle}>x</button>
    </p>
      </div>
       );



  }
}
const itemStyle={
  backgroundColor:'#f4f4f4'
}
const btnStyle={
  background:'#ff0000',
  color:'#fff',
  border:'none',
  padding:'5px 9px',
  borderRadius:'50%',
  cursor:'pointer',
  float:'right'
}
export default Todoitem;
