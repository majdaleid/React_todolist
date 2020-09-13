import React, {Component} from 'react';

import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import Addtodo from './components/Addtodo';
import {v4 as uuid} from 'uuid';
import About from './components/pages/About';
import axios from 'axios';
import {BrowserRouter as Router,Route } from 'react-router-dom';
class App extends Component {
  /* function App() { */
  state = {
    todos: [
    /*  {
        id: uuid(),
        title: 'the first title',
        completed: false
      }, {
        id: uuid(),
        title: 'the second title',
        completed: true
      }, {
        id: uuid(),
        title: 'the third title',
        completed: false
      }*/
    ]
  }

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res=>this.setState({todos:res.data}))
  //.then(res=>console.log(res.data))
}

// Delete Todo with api
 delTodo2 = id => {
   axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
     this.setState({
       todos: [...this.state.todos.filter(todo => todo.id !== id)]
     })
   );
 };

/* delete todo normal
  delTodo2 = (id) => {
    this.setState ({todos:[...this.state.todos.filter(todo =>
todo.id!==id)] });

}
*/

  markComplete2 = (id)=>{
  this.setState({todos:this.state.todos.map(todo =>
{
  if(todo.id===id){
    todo.completed= !todo.completed
  }
  return todo;
}

  )})
  }
/*without api*/
  addTodo2=(title)=>{
    //console.log(title)
  /*const newTodo ={
    id:uuid(),
    title:title,
    completed:false
  }*/
//  this.setState({todos:[...this.state.todos,newTodo]});

/*with api */
   axios.post('https://jsonplaceholder.typicode.com/todos', {
      title:title,
      completed: false
    })
    .then(res => {

      this.setState({ todos: [...this.state.todos, res.data] });
    });
};
render(){
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/" render={props =>(
      <React.Fragment>
        <Addtodo addTodo={this.addTodo2}/>
         <Todos todos={this.state.todos} markComplete={this.markComplete2} delTodo={this.delTodo2} />
      </React.Fragment>
        )} />
      <Route path="/about" component={About} />
    </div>
  </Router>
  );
}
}
export default App;
